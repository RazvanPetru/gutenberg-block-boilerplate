import { InnerBlocks, InspectorControls, RichText, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, RangeControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
export default function edit({className, attributes, setAttributes}) {
    const {columns, content} = attributes;

    const onChangeColumns = (newColumns) => {
        setAttributes({columns: newColumns})
    }

    const onChangeContent = (newContent) => {
        setAttributes({content: newContent})
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
            <RichText
                tagName="h2"
                className="test"
                value={content}
                onChange={onChangeContent}
            />
                
        </div>
    );
};