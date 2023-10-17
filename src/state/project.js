import { atom } from 'recoil';

const projectAtom = atom({
    key: 'project',
    default: JSON.parse(localStorage.getItem('project'))
});

export { projectAtom };
