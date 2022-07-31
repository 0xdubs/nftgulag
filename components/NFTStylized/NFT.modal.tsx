import React from 'react';
import { Information } from "web3uikit"
import { Modal } from "web3uikit"
import { Typography } from "web3uikit"
import styles from './NFT.styles';
const { DivModalStyled } = styles;
interface INFTModal {
    /**
     * attributes / traits metadata
     */
    attributes?: Array<any>;

    /**
     * toggle modal visibility
     */
    setShowModal: (e: boolean) => void;
}

const separateLongStringWithSpaces = (text: string) => {
    const array = text.match(/.{1,15}/g)
    let returnedString = ""
    array?.map((item,index)=> {
        if (array.length===1) {
            returnedString+=item
        }
        else if (index!==array.length) {
            returnedString+=`${item} `
        }
    })
    return returnedString
}

const NFTModal: React.FC<INFTModal> = ({ attributes, setShowModal }) => {
    return (
        <Modal
            isVisible
            hasFooter={false}
            headerHasBottomBorder={false}
            title={'Information'}
            onCloseButtonPressed={() => setShowModal(false)}
            
        >
            <div className='z-10000 z-auto'>
                <Typography variant="h4">Traits</Typography>
                <DivModalStyled>
                    {attributes && attributes.length > 0 ? (
                        attributes.map((attribute, index) => {
                            if (typeof attribute === 'string') {
                                return (
                                    <div
                                        key={`${index}-attribute`}
                                        id="widget-row"
                                    >
                                        <Information
                                            topic={`#${index}`}
                                            information={String(attribute)}
                                            key={`attr-${index}`}
                                        />
                                    </div>
                                );
                            }
                            return (
                                <div key={`${index}-attribute`} id="widget-row">
                                    <Information
                                        topic={
                                            attribute.trait_type || `#${index}`
                                        }
                                        information={
                                            separateLongStringWithSpaces(attribute.value.toString()) || `#${index}`
                                        }
                                        key={`attr-${index}`}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <Typography>No attributes found</Typography>
                    )}
                </DivModalStyled>
            </div>
        </Modal>
    );
};

export default NFTModal;
