import fs from 'fs';
import chalk from 'chalk'

import { executionAsyncResource } from 'async_hooks';

function tratarErro(erro){
   
    throw new Error(chalk.red(erro.code,'Esse arquivo não existe'));
   
}

function extraLInks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s)]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultado = capturas.map(capturas=>)
}