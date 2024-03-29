/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';

type ResizerMouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export interface Props {
  onMouseDown: (eve: ResizerMouseEvent) => void;
}

/**
 * TODO: This component uses styling constants from public UI - should be removed, next iteration should incl. horizontal and vertical resizers.
 */
export function Resizer(props: Props) {
  return (
    <div style={{
      display: 'flex',
      flex: '0 0 14px',
      backgroundColor: '#fafbfd',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0',
      userSelect: 'none',
      cursor: 'ew-resize',
      width: '14px',
    }} {...props}>
      &#xFE19;
    </div>
  );
}
