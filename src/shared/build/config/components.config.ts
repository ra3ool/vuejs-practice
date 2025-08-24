import Components from 'unplugin-vue-components/vite';

const createComponents = () => {
  return Components({
    globs: ['src/**/components/**', 'src/**/layouts/**'],
    dts: 'components.d.ts',
    resolvers: [],
  });
};
export default createComponents;
