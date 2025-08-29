import Components from 'unplugin-vue-components/vite';

const createComponents = () => {
  return Components({
    globs: ['src/**/components/**/*.vue'],
    globsExclude: ['src/**/components/**/*.view.vue'],
    dts: 'components.d.ts',
  });
};
export default createComponents;
