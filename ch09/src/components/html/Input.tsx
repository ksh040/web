type InputProps = Omit<React.ComponentPropsWithRef<'input'>,'type'>&{
    type?:'text';
}
export default function Input(props:InputProps){
    const {...rest} = props;
    return <input {...rest}/>
}