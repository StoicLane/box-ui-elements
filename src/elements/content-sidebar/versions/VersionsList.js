/**
 * @flow
 * @file Versions List component
 * @author Box
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import type { BoxItemVersion } from '../../../common/types/core';
import VersionsItem from './VersionsItem';
import './VersionsList.scss';

type Props = {
    currentId?: string,
    fileId: string,
    versionCount: number,
    versionLimit: number,
    versions: Array<BoxItemVersion>,
};

const VersionsList = ({ currentId, versions, ...rest }: Props) => {
    const params = useParams();
    const { versionId } = params;

    return (
        <ul className="bcs-VersionsList">
            {versions.map(version => (
                <li className="bcs-VersionsList-item" key={version.id}>
                    <VersionsItem
                        isCurrent={currentId === version.id}
                        isSelected={versionId === version.id}
                        version={version}
                        {...rest}
                    />
                </li>
            ))}
        </ul>
    );
};

export default VersionsList;
