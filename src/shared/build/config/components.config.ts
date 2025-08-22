import Components from 'unplugin-vue-components/vite';

const createComponents = () => {
  return Components({
    globs: ['src/**/components/**'],
    dts: 'components.d.ts',
  });
};
export default createComponents;
