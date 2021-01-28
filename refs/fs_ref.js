const fs = require('fs')
const path = require('path')

//File system

/*
//Создать папку
fs.mkdir(path.join(__dirname, 'notes'), err => {
   if (err) throw err  //Вывод ошибки первым параметром в node js это внегласное правило

   console.log('Folder is created')
})*/

/*
//Создать файл
fs.writeFile(
   path.join(__dirname, 'notes', 'mynotes.txt'),
   'Hello world',
   err => {
      if (err) throw err

      console.log('File is created')

      //Добавить данные в файл
      fs.appendFile(
         path.join(__dirname, 'notes', 'mynotes.txt'),
         ' Content new 2021',
         err => {
            if (err) throw err

            console.log('File is changed')

            //Получить контент файла
            fs.readFile(
               path.join(__dirname, 'notes', 'mynotes.txt'),
               'utf-8',//Кодировка
               (err, data) => {
                  if (err) throw err

                  console.log(data)
                  //console.log(Buffer.from(data).toString())
               }
            )
         }
      )
   }
) */

//Переименовать файл
fs.rename(
   path.join(__dirname, 'notes', 'mynotes.txt'),
   path.join(__dirname, 'notes', 'notes.txt'),
   err => {
      if (err) throw err

      console.log('File renamed')
   }
)


