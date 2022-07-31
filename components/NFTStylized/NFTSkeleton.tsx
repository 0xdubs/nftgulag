import React from 'react';
import styles from './NFT.styles';
import { Skeleton } from "web3uikit"
const { DivStyled } = styles;
const NFTSkeleton: React.FC = ({
    ...props
}) => {
        return (
            <div data-testid="test-nft-metadata-loading" {...props}>
                <DivStyled id="nft">
                    <Skeleton theme="text" width="100%" height="200px" />
                    <div id="information">
                        <Skeleton theme="text" width="30%" height="18px" />
                        <Skeleton theme="image" width="60px" height="60px" />
                    </div>
                </DivStyled>
            </div>
        );
    }

    

export default NFTSkeleton;
