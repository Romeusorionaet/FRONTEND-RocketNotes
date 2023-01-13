import {Container, Links, Content} from './style';
import {useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {api} from '../../services/api';

import {Button} from '../../components/Button';
import {Header} from '../../components/Header';
import {Section} from '../../components/Section';
import {Tags} from '../../components/Tags';
import {ButtonText} from '../../components/ButtonText';

export function Details() {
  const [data, setData] = useState([]);
  
  const params = useParams();
  const navigate = useNavigate();

  function handleBack(){
    navigate(-1);
  }

  async function handleRemove(){
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if(confirm){
      await api.delete(`/notes/${params.id}`);
      handleBack();
    }
  }

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  },[]);

  return (
    <Container>

      <Header />

      {
        <main>
        <Content>
          <ButtonText 
          onClick={handleRemove}
          title="Excluir nota" 
          />

          <h1>
            {data.title}
          </h1>
          <p>
            {data.description}
          </p>


          {
            data.links &&
            <Section title="Links úteis">
            <Links>
              {
                data.links.map(link=>(
                <ul key={String(link.id)}>
                  <li>
                    <a 
                    target="_blank"
                    href={link.url}>
                      {link.url}
                    </a>
                  </li>
                </ul>
                ))
              }
            </Links>
          </Section>
          }

          {
            data.tags &&
            <Section title="Marcadores">
            {
              data.tags.map(tag=>(
                <Tags 
                key={String(tag.id)}
                title={tag.name}
                 />
              ))
            }
            </Section>
          }

          <Button 
          onClick={handleBack}
          title="Voltar" />
        </Content>
      </main>
      }
    </Container>
  )
}