import {FiPlus} from 'react-icons/fi';
import {AiOutlineArrowLeft} from 'react-icons/ai';

import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {api} from '../../services/api';

import {Container, Brand, Menu, Search, Content, NewNote} from './style';

import {Header} from '../../components/Header';
import {Note} from '../../components/Note';
import {ButtonText} from '../../components/ButtonText';
import {Input} from '../../components/Input';
import {Section} from '../../components/Section';

export function Home() {
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);
    const [notes, setNotes] = useState([]);

    const [sidebar, setSidebar] = useState(false);

    const navigate = useNavigate();
  
    function handleTagSelected(tagName){
        if(tagName === "all"){
            return setTagsSelected([]);
        }

        const alreadySelected = tagsSelected.includes(tagName);
        
        if(alreadySelected){
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags)
        }else{
            setTagsSelected(prevState => [...prevState, tagName]);
        }
    }

    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(()=>{
        async function fetchTags(){
            const response = await api.get("/tags");
            setTags(response.data);
        }
        fetchTags();
    },[]);

    useEffect(()=>{
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);
            setNotes(response.data);
        }
        fetchNotes();
    },[tagsSelected, search])

    function handleInput() {
        setSidebar(!sidebar)
    }
    
    return(
        <Container>
            <div className={sidebar === true ? 'sidebar' : 'wrapper'}>
                <div className='inputSvg'>
                    <div>
                        <input type='checkbox' onClick={handleInput} />
                        <AiOutlineArrowLeft size='32' className={sidebar === true ? 'rotate180' : ''} />
                    </div>
                </div>
                
                <Brand>
                    <h1>Rocketseat</h1>
                </Brand>

                <Header />

                <Menu>
                    <ul>
                        <li><ButtonText 
                        title="Todos" 
                        isActive={tagsSelected.length === 0} 
                        onClick={()=> handleTagSelected("all")} 
                        />
                        </li>
                    </ul>
                    {
                        tags && tags.map(tag => (
                            <ul key={String(tag.id)}>
                                <li>
                                    <ButtonText 
                                    title={tag.name}
                                    onClick={()=> handleTagSelected(tag.name)} 
                                    isActive={tagsSelected.includes(tag.name)} 
                                    />
                                </li>
                            </ul>
                        ))
                    }  
                </Menu>

                <Search>
                    <Input  
                    placeholder="Pesquisar pelo título"
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </Search>
                <Content>
                    <Section title="Minhas notas">
                        {
                            notes.map(note=>(
                            <Note 
                            key={String(note.id)}
                            data={note}
                            onClick={()=> handleDetails(note.id)}
                            />
                            ))
                        }
                    </Section>
                </Content>

                <NewNote to="/new">
                    <FiPlus />
                    Criar nota
                </NewNote>
            </div>
        </Container>
    )
}