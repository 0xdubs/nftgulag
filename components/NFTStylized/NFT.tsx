import React, { useState } from 'react';
import {
    useMoralis,
    useMoralisWeb3Api,
    useMoralisWeb3ApiCall,
} from 'react-moralis';
import styles from './NFT.styles';
import { Button } from "web3uikit"
import NFTModal from './NFT.modal';
import { INFTProps, TNFTMetadata } from './types';
import NFTUtils from './NFT.utils';
import { Skeleton } from "web3uikit"
import { Typography } from "web3uikit"
import FetchedNFT from './NFT.fetched';
import { Tooltip } from "web3uikit"
import { Icon } from "web3uikit"
const { DivStyled } = styles;
const { image } = NFTUtils;
const NFT: React.FC<INFTProps> = ({
    address,
    chain,
    contractType = 'ERC721',
    name,
    tokenId,
    fetchMetadata,
    metadata,
    ...props
}) => {
    const { isInitialized, isInitializing } = useMoralis();
    const Web3API = useMoralisWeb3Api();
    const { data, error, isLoading, isFetching } = useMoralisWeb3ApiCall(
        Web3API.token.getTokenIdMetadata,
        {
            address,
            chain,
            token_id: String(tokenId),
        },
        {
            autoFetch:
                isInitialized &&
                fetchMetadata &&
                /^0x[a-fA-F0-9]{40}$/.test(address),
        },
    );
    const [showTraits, setShowModal] = useState(false);

    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) {
        return (
            <div data-testid="test-nft-no-valid-address">No valid address</div>
        );
    }

    if (!fetchMetadata) {
        return (
            <FetchedNFT
                contractType={contractType}
                metadata={metadata}
                name={name}
            />
        );
    }

    if (!isInitialized && !isInitializing) {
        return <div data-testid="test-nft-no-moralis-instance" />;
    }

    if (isLoading || isFetching) {
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

    if (error) {
        return <div data-testid="test-nft-metadata-error">{error.message}</div>;
    }

    if (!data) {
        return <div data-testid="test-nft-metadata-error">No response</div>;
    }

    if (!data?.metadata) {
        return (
            <DivStyled id="nft">
                <Skeleton theme="text" width="100%" height="200px" />
                <div id="information">
                    <Tooltip
                        // eslint-disable-next-line react/no-children-prop
                        children={<Icon svg="info" fill="#041836" />}
                        content={'There is no metadata'}
                        position={'top'}
                    />
                </div>
            </DivStyled>
        );
    }

    return (
        <div data-testid="test-nft">
            <DivStyled id="nft">
                {image(
                    (JSON.parse(String(data.metadata)) as TNFTMetadata)
                        ?.animation_url,
                    (JSON.parse(String(data.metadata)) as TNFTMetadata)
                        ?.image ||
                        (JSON.parse(String(data.metadata)) as TNFTMetadata)
                            ?.image_url,
                )}
                <div>
                    <div className='text-center flex flex-col'>
                        <Typography variant="caption14" color="#030200">
                            {(JSON.parse(String(data.metadata)) as TNFTMetadata)
                                ?.name || name}
                        </Typography>
                        <Typography variant="caption12">
                            {data.contract_type || contractType}
                        </Typography>
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
                    {showTraits && (
                        <NFTModal
                            attributes={
                                (JSON.parse(
                                    String(data.metadata),
                                ) as TNFTMetadata)?.traits ||
                                (JSON.parse(
                                    String(data.metadata),
                                ) as TNFTMetadata)?.attributes
                            }
                            setShowModal={setShowModal}
                        />
                    )}
                </div>
            </DivStyled>
        </div>
    );
};

export default NFT;
