import {Container} from '@chakra-ui/react';
import React from 'react';

export default function OneColumnCenterPage<T>(props: React.PropsWithChildren<T>){
    return (
        <Container maxW="container.lg" centerContent>
            {props.children}
        </Container>
    )
}