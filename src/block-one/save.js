import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";

export default function save({className, attributes}) {
    const {columns, content} = attributes;

    return (
        <div { ...useBlockProps.save({
            className: `has-${ columns }-columns`
        }) }>
            <div></div>
            <RichText.Content tagName="h2" value={content} className="test"/>
        </div>
    );
}