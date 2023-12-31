import { atom } from 'recoil';
import {recoilPersist} from "recoil-persist";
const { persistAtom } = recoilPersist()

const moduleAtom = atom({
    key: 'module',
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export { moduleAtom };
