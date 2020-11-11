import fs from 'fs';

fs.readFile('./arquivo.sql', 'utf8', ({ data }) => {
  const linhas: string[] = data.split(/\r?\n/);
  const pushes: string[] = [];
  let contador = 0;
  linhas.forEach(linha => {
    const last = linha.split('=')[5];

    if (!pushes.includes(last)) {
      pushes.push(last);
      contador += 1;
    }
  });
  console.log(contador);
});
