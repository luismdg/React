export default function Tabs({children, buttons, ButtonsContainer = 'div'}) {

    // const ButtonContainer = buttonsContainer

    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}