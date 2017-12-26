import config from '../bin/route.json';
const nav = config.components.map(item => {
  return {
    path: '/' + item.name,
    name: item.name,
    component: resolve =>
      require(['../packages/' + item.name + '/readme.md'], resolve),
    meta: {
      title: item.title
    }
  };
});
export default nav;
