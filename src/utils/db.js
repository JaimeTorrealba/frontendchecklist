import Dexie from 'dexie';
import { schema } from './schema';

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
  alert(newTable);
};

export const searchForName = async (queryName) => {
  const ProjectName = await db.Projects.get({ name: queryName });
  if (ProjectName) {
    return alert('El nombre ya existe');
  }
  addNewProject(queryName);
};
export const getProjectByName = async (tableName) => {
  const test = await db.Projects.get({ name: tableName });
  return test;
};
export const getAllTables = async () => {
  return await db.table('Projects').toArray();
};
