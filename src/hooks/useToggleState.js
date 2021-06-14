import { useState } from 'react';

export default function useToogle(initialVal = false) {
    const [state, setState] = useState(initialVal);
    const toggle = () => {
        setState(!state);
    }
    return [state, toggle];
}