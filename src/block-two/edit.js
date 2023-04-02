import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export default function edit({attributes, setAttributes}) {
    const {columns} = attributes;

    const onChangeColumns = (newColumns) => {
        setAttributes({columns: newColumns})
    }
    return (
        <div {...useBlockProps({
            className: `has-${ columns }-columns`
        })}>
            <InspectorControls>
                <PanelBody>
                    <RangeControl
                        label={ __( 'Columns', 'firstblock' )}
                        min= {1}
                        max= {3}
                        onChange= {onChangeColumns}
                        value= {columns}
                    />
                </PanelBody>
            </InspectorControls>
            
        </div>
    );
};