/**
 * React renderer.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// @ts-ignore
import { Button } from '@/renderer/components/Button/Button';

ReactDOM.render(
    <Button />,
  document.getElementById('app')
);
