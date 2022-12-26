import {useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {TextArea} from '../../components/TextArea';
import {NoteItem} from '../../components/NoteItem';
import {Section} from '../../components/Section';
import {Button} from '../../components/Button';
import {ButtonText} from '../../components/ButtonText';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

import {api} from '../../services/api';

import {Container, Form} from './style';

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    function handleAddLink(){
        if(!newLink){
            return
        }else{
            setLinks(prevState => [...prevState, newLink]);
            setNewLink("");
        }
    }

    function handleRemoveLink(linkDeleted) {
        setLinks(prevState => prevState.filter(link => link !== linkDeleted));
    }

    function handleAddTag() {
        if(!newTag){
            return
        }else{
            setTags(prevState => [...prevState, newTag]);
            setNewTag("");
        }
    }

    function handleRemoveTag(tagDeleted) {
        setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
    }
    
    async function handleNewNote() {
       if(newTag || newLink){
            return alert(`Você escreveu algo em tag ou link e não adicionou. Clique no botão + de adicionar!`)
       }

        const verificTitleAndDescription = (!title, !description);
        const verificTagsAndLinks = (tags.length < 1 || links.length < 1);

        if(verificTitleAndDescription || verificTagsAndLinks){
            alert("campo vázio.")
        }else{
            await api.post("/notes", {
                title,
                description,
                tags,
                links
            });
            alert("Nota criada com sucesso!");
            navigate(-1);
        }
    }

    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText 
                        onClick={handleBack}
                        title="Voltar" />
                    </header>

                    <Input 
                    placeholder="Titulo" 
                    onChange={e => setTitle(e.target.value)}
                    />

                    <TextArea 
                    placeholder="Observações" 
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                            links.map((link, index)=>(
                                <NoteItem 
                                    key={String(index)}
                                    value={link}
                                    onClick={() => handleRemoveLink(link)}
                                />
                            ))
                        }
                        <NoteItem 
                        isNew
                        placeholder="Novo link"
                        value={newLink}
                        onChange={e => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index)=>(
                                    <NoteItem
                                    key={String(index)}
                                    value={tag} 
                                    onClick={()=> handleRemoveTag(tag)}
                                    />
                                ))
                            }
                            
                            <NoteItem 
                            isNew 
                            placeholder="Nova tag" 
                            onChange={e =>setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                            />

                        </div>
                    </Section>
                    <Button onClick={handleNewNote} title="Salvar" />
                </Form>
            </main>
        </Container>
    )
}