import styled from 'styled-components'


export const StyledAnimatedText = styled.div`
font-size: 15vw;
@keyframes enter {
    0%{
        opacity:0;
        transform:translateY(10rem);
    };
    40%{
       opacity:.05;
        transform:translateY(-5rem);
    }
    100%{
        opacity:1;
        transform:translateY(0);
    }
}
`

export const StyledChar = styled.span`
will-change: transform, opacity;
display:inline-block;
animation:enter;
animation-delay:${props=>props.delay}s;
animation-duration: ${props=>props.duration}s;

`