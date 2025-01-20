import {Container} from "../components/layout/container/container.tsx";
import {Hero, HeroActions, HeroContent, HeroHeader} from "../components/layout/hero/hero.tsx";
import {Button} from "../components/ui/button.tsx";


export const HomePage = () => {
    return (
        <Container>
            <Hero>
                <HeroHeader>
                    Hey, I'm Garrett Moseley
                </HeroHeader>
                <HeroContent>
                    I'm a fullstack engineer!
                </HeroContent>
                <HeroActions>
                    <Button size="lg">Projects</Button>
                </HeroActions>
            </Hero>
        </Container>
    );
}