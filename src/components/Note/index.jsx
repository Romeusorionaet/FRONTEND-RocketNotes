import {Container} from './style';
import {Tags} from '../Tags';

export function Note({data, ...rest}) {
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>

            {
                data.noteTags &&
                <footer>
                    {
                        data.noteTags.map(tag =>(
                    <Tags key={String(tag.id)} title={tag.name} />
                    ))
                    }
                </footer>
            }
        </Container>
    )
}