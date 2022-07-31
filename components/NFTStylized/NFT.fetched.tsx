import React, { useState } from 'react';
import { Button } from "web3uikit"
import { Typography } from 'web3uikit';
import NFTStyles from './NFT.styles';
import NFTUtils from './NFT.utils';
import { TNFTMetadata } from './types';
import NFTModal from './NFT.modal';

const { DivStyled } = NFTStyles;
const { image } = NFTUtils;

const FetchedNFT: React.FC<{
    contractType?: string;
    metadata?: TNFTMetadata;
    name?: string;
}> = ({ contractType, metadata, name }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <DivStyled id="nft">
            {image(
                metadata?.animation_url,
                metadata?.image || metadata?.image_url,
            )}
            <div id="nft-info">
                <div>
                    <Typography variant="body16">
                        {metadata?.name || name}
                    </Typography>
                    <Typography variant="caption12">{contractType}</Typography>
                </div>
            </div>
            <div id="nft-footer">
                <Button
                    icon="info"
                    isTransparent
                    iconColor="#68738D"
                    iconLayout="icon-only"
                    onClick={() => setShowModal(true)}
                />
                {showModal && (
                    <NFTModal
                        attributes={metadata?.traits || metadata?.attributes}
                        setShowModal={setShowModal}
                    />
                )}
            </div>
        </DivStyled>
    );
};

export default FetchedNFT;
