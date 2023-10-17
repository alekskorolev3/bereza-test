import { atom } from 'recoil';

const messagesAtom = atom({
    key: 'messages',
    default: []
});

export { messagesAtom };
