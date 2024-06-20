const svgrTemplateCreator = (prefix, solid) => {
    return  (variables, { tpl }) => {
        const modifiedComponentName = `${variables.componentName.replace(
            "Svg",
            prefix + (solid ? 'Fill' : '')
        )}`;

        return tpl`
        import {SVGProps} from 'react'
        ${variables.interfaces};

        const ${modifiedComponentName} = (${variables.props}) => (
            ${variables.jsx}
        );
        export default ${modifiedComponentName};
    `;
    };
}
module.exports = {
    svgrTemplateCreator
}
