import {Container, SimpleGrid} from '@chakra-ui/react';
import React from 'react';

export default function OneColumnCenterPage<T>(props: React.PropsWithChildren<T>){
    return (
        <Container maxW="container.lg" centerContent>
            <SimpleGrid columns={2}>
                {props.children}
            </SimpleGrid>
        </Container>
    )
}