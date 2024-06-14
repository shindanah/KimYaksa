const express = require('express');
const multer = require('multer');
const router = express.Router();
const pillController = require('../controllers/pillController');
const searchPillController = require('../controllers/searchPillController');
const combinedPillController = require('../controllers/combinedPillController');

// multer 설정: 이미지 업로드를 처리합니다.
const uploadCir = multer({
    dest: 'src/controllers/uploads/cir/',
    limits: {
      fileSize: 10 * 1024 * 1024, // 최대 10MB 크기 제한
    },
  });

const uploadEll = multer({
    dest: 'src/controllers/uploads/ell/',
    limits: {
      fileSize: 10 * 1024 * 1024, // 최대 10MB 크기 제한
    },
  });

  const uploadEtc = multer({
    dest: 'src/controllers/uploads/etc/',
    limits: {
      fileSize: 10 * 1024 * 1024, // 최대 10MB 크기 제한
    },
  });

  const uploadObl = multer({
    dest: 'src/controllers/uploads/obl/',
    limits: {
      fileSize: 10 * 1024 * 1024, // 최대 10MB 크기 제한
    },
  });

  const uploadPHO = multer({
    dest: 'src/controllers/uploads/PHO/',
    limits: {
      fileSize: 10 * 1024 * 1024, // 최대 10MB 크기 제한
    },
  });

  const uploadTRR = multer({
    dest: 'src/controllers/uploads/TRR/',
    limits: {
      fileSize: 10 * 1024 * 1024, // 최대 10MB 크기 제한
    },
  });


// POST 요청 핸들러: 이미지를 업로드하고 pillController.uploadPillPhoto 함수로 라우팅합니다.
router.post('/upload/cir', uploadCir.single('image'), pillController.uploadCirPillPhoto);
router.post('/upload/ell', uploadEll.single('image'), pillController.uploadEllPillPhoto);
router.post('/upload/etc', uploadEtc.single('image'), pillController.uploadEtcPillPhoto);
router.post('/upload/obl', uploadObl.single('image'), pillController.uploadOblPillPhoto);
router.post('/upload/PHO', uploadPHO.single('image'), pillController.uploadPHOPillPhoto);
router.post('/upload/TRR', uploadTRR.single('image'), pillController.uploadTRRPillPhoto);

router.get('/searchSeq/:pillName', searchPillController.searchSeq);
router.get('/search/:pillSeq', searchPillController.searchPill);
router.get('/combine/:pillSeq', combinedPillController.combinedPill);


module.exports = router;
