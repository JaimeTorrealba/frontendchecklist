import Dexie from 'dexie';
import { schema } from './schema';
import store from '../store/store';

export const db = new Dexie('Projects');
db.version(1).stores({
  Projects: '++id,date,name,checkList',
});

export const addNewProject = async (name) => {
  const newTable = await db.Projects.put({
    date: Date.now(),
    name: name,
    checkList: schema,
  });
  saveInVuex(newTable);
};

export const searchForName = async (queryName) => {
  const ProjectName = await db.Projects.get({ name: queryName });
  if (ProjectName) {
    return alert('El nombre ya existe');
  }
  addNewProject(queryName);
};
export const saveInVuex = async (tableId) => {
  const tables = await db.Projects.get(tableId);
  await store.dispatch('updateStoreAction', { tables });
  alert('Se guardo correctamente');
};
