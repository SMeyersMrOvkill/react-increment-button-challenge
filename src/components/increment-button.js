import React from 'react';

export default function IncrementButton(props) {
    return <button onClick={e => props.increment()}>Increment</button>;
}
