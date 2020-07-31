import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroVideo from './pages/cadastro/video'
import CadastroCategoria from './pages/cadastro/Categoria'

const page = () => <div className="page"></div>

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/cadastro/video" component={CadastroVideo} />
            <Route path="/cadastro/categoria" component={CadastroCategoria} />
            <Route exact path="/" component={Home} />
            <Route component={page} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
)
