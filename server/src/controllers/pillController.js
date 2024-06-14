// 알약 사진 업로드 시 알약명 

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const pillController = {
  uploadCirPillPhoto: (req, res) => {
    // 이미지 파일 경로
    const imagePath = req.file.path;
    const newPath = `${imagePath}.png`;

    fs.rename(imagePath, newPath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      }
      
      console.log('Image uploaded and converted to PNG successfully');

      // 파이썬 스크립트 실행 코드
      const python = spawn('python', ['./python/pill.py', newPath, "cir"]);
      let dataBuffer = Buffer.from('');

      python.stdout.on('data', (data) => {
        dataBuffer = Buffer.concat([dataBuffer, data]);
      });

      python.stderr.on('data', (data) => {
        console.error(`파이썬 스크립트의 표준 에러: ${data}`);
      });

      python.on('close', (code) => {
        if (code === 0) {
          console.log(`파이썬 스크립트 실행이 완료되었습니다.`);
          const result = dataBuffer.toString('utf-8');
          res.send(result);
        } else {
          console.error(`파이썬 스크립트 종료 코드: ${code}`);
          res.status(500).send('서버에서 오류가 발생했습니다.');
        }
      });
    });
  },
  uploadEllPillPhoto: (req, res) => {
    // 이미지 파일 경로
    const imagePath = req.file.path;
    const newPath = `${imagePath}.png`;

    fs.rename(imagePath, newPath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      }
      
      console.log('Image uploaded and converted to PNG successfully');

      // 파이썬 스크립트 실행 코드
      const python = spawn('python', ['./python/pill.py', newPath, "ell"]);
      let dataBuffer = Buffer.from('');

      python.stdout.on('data', (data) => {
        dataBuffer = Buffer.concat([dataBuffer, data]);
      });

      python.stderr.on('data', (data) => {
        console.error(`파이썬 스크립트의 표준 에러: ${data}`);
      });

      python.on('close', (code) => {
        if (code === 0) {
          console.log(`파이썬 스크립트 실행이 완료되었습니다.`);
          const result = dataBuffer.toString('utf-8');
          res.send(result);
        } else {
          console.error(`파이썬 스크립트 종료 코드: ${code}`);
          res.status(500).send('서버에서 오류가 발생했습니다.');
        }
      });
    });
  },
  uploadEtcPillPhoto: (req, res) => {
    // 이미지 파일 경로
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    const imagePath = req.file.path;
    const newPath = `${imagePath}.png`;

    fs.rename(imagePath, newPath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      }
      
      console.log('Image uploaded and converted to PNG successfully');

      // 파이썬 스크립트 실행 코드
      const python = spawn('python', ['./python/pill.py', newPath, "etc"]);
      let dataBuffer = Buffer.from('');

      python.stdout.on('data', (data) => {
        dataBuffer = Buffer.concat([dataBuffer, data]);
      });

      python.stderr.on('data', (data) => {
        console.error(`파이썬 스크립트의 표준 에러: ${data}`);
      });

      python.on('close', (code) => {
        if (code === 0) {
          console.log(`파이썬 스크립트 실행이 완료되었습니다.`);
          const result = dataBuffer.toString('utf-8');
          res.send(result);
        } else {
          console.error(`파이썬 스크립트 종료 코드: ${code}`);
          res.status(500).send('서버에서 오류가 발생했습니다.');
        }
      });
    });
  },
  uploadOblPillPhoto: (req, res) => {
    // 이미지 파일 경로
    const imagePath = req.file.path;
    const newPath = `${imagePath}.png`;

    fs.rename(imagePath, newPath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      }
      
      console.log('Image uploaded and converted to PNG successfully');

      // 파이썬 스크립트 실행 코드
      const python = spawn('python', ['./python/pill.py', newPath, "obl"]);
      let dataBuffer = Buffer.from('');

      python.stdout.on('data', (data) => {
        dataBuffer = Buffer.concat([dataBuffer, data]);
      });

      python.stderr.on('data', (data) => {
        console.error(`파이썬 스크립트의 표준 에러: ${data}`);
      });

      python.on('close', (code) => {
        if (code === 0) {
          console.log(`파이썬 스크립트 실행이 완료되었습니다.`);
          const result = dataBuffer.toString('utf-8');
          res.send(result);
        } else {
          console.error(`파이썬 스크립트 종료 코드: ${code}`);
          res.status(500).send('서버에서 오류가 발생했습니다.');
        }
      });
    });
  },uploadPHOPillPhoto: (req, res) => {
    // 이미지 파일 경로
    const imagePath = req.file.path;
    const newPath = `${imagePath}.png`;

    fs.rename(imagePath, newPath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      }
      
      console.log('Image uploaded and converted to PNG successfully');

      // 파이썬 스크립트 실행 코드
      const python = spawn('python', ['./python/pill.py', newPath, "PHO"]);
      let dataBuffer = Buffer.from('');

      python.stdout.on('data', (data) => {
        dataBuffer = Buffer.concat([dataBuffer, data]);
      });

      python.stderr.on('data', (data) => {
        console.error(`파이썬 스크립트의 표준 에러: ${data}`);
      });

      python.on('close', (code) => {
        if (code === 0) {
          console.log(`파이썬 스크립트 실행이 완료되었습니다.`);
          const result = dataBuffer.toString('utf-8');
          res.send(result);
        } else {
          console.error(`파이썬 스크립트 종료 코드: ${code}`);
          res.status(500).send('서버에서 오류가 발생했습니다.');
        }
      });
    });
  },uploadTRRPillPhoto: (req, res) => {
    // 이미지 파일 경로
    const imagePath = req.file.path;
    const newPath = `${imagePath}.png`;

    fs.rename(imagePath, newPath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
      }
      
      console.log('Image uploaded and converted to PNG successfully');

      // 파이썬 스크립트 실행 코드
      const python = spawn('python', ['./python/pill.py', newPath, "TRR"]);
      let dataBuffer = Buffer.from('');

      python.stdout.on('data', (data) => {
        dataBuffer = Buffer.concat([dataBuffer, data]);
      });

      python.stderr.on('data', (data) => {
        console.error(`파이썬 스크립트의 표준 에러: ${data}`);
      });

      python.on('close', (code) => {
        if (code === 0) {
          console.log(`파이썬 스크립트 실행이 완료되었습니다.`);
          const result = dataBuffer.toString('utf-8');
          res.send(result);
        } else {
          console.error(`파이썬 스크립트 종료 코드: ${code}`);
          res.status(500).send('서버에서 오류가 발생했습니다.');
        }
      });
    });
  },
};

module.exports = pillController;
