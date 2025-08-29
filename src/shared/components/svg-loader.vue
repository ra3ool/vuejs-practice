<script lang="ts">
const COLOR_REGEX = /#[0-9a-fA-F]{3,8}/g;

interface SvgLoaderProps {
  name: string;
  subDomain?: string;
  path?: string;
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  preserveAspectRatio?: string;
  viewBox?: string;
}

// --- Caching for preloaded SVGs ---
const svgCache = new Map<string, string>();

// Transform SVG to use currentColor if single color
const transformSvg = (svg: string) => {
  const colors = svg.match(COLOR_REGEX);
  if (!colors) return svg;

  const uniqueCount = new Set(colors).size;
  if (uniqueCount <= 1) {
    return svg.replace(COLOR_REGEX, 'currentColor');
  }

  return svg;
};

// --- Preload function (exported) ---
export const preloadSvg = async (name: string, subDomain = 'shared') => {
  const key = `${subDomain}/${name}`;
  if (svgCache.has(key)) return;

  const module = await import(`../../assets/svg/${subDomain}/${name}.svg?raw`);
  svgCache.set(key, transformSvg(module.default));
};

export default {
  name: 'SvgLoader',
  props: {
    name: { type: String, required: true },
    subDomain: { type: String, default: 'shared' },
    path: { type: String, default: '' },
    width: { type: String, default: undefined },
    height: { type: String, default: undefined },
    color: { type: String, default: undefined },
    backgroundColor: { type: String, default: undefined },
    preserveAspectRatio: { type: String, default: undefined },
    viewBox: { type: String, default: undefined },
  },
  setup(props: SvgLoaderProps) {
    const svgContent = ref<string | null>(null);
    const currentColor = ref<string>('');

    const loadSvg = async () => {
      const [subDomain, name] = props.path
        ? props.path.split('/')
        : [props.subDomain || 'shared', props.name];

      const key = `${subDomain}/${name}`;

      if (svgCache.has(key)) {
        svgContent.value = svgCache.get(key)!;
      } else {
        const module = await import(
          `../../assets/svg/${subDomain}/${name}.svg?raw`
        );
        const transformed = transformSvg(module.default);
        svgCache.set(key, transformed);
        svgContent.value = transformed;
      }
    };

    watchEffect(loadSvg);

    const attributes = {
      ...(props.width && { width: props.width }),
      ...(props.height && { height: props.height }),
      ...(props.height && props.width && { preserveAspectRatio: 'none' }),
      ...(props.viewBox && { viewBox: props.viewBox }),
    };

    return { svgContent, currentColor, attributes };
  },
};
</script>

<template>
  <span
    v-html="svgContent"
    v-bind="attributes"
    class="svg"
    :style="{
      '--current-color': color || currentColor,
      '--current-background-color': backgroundColor,
    }"
  />
</template>

<style lang="scss" scoped>
.svg {
  color: var(--current-color);
  background-color: var(--current-background-color);
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
