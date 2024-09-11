"use client";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Webcam from "react-webcam";
import {
  PoseLandmarker,
  FaceLandmarker,
  FilesetResolver,
  DrawingUtils,
} from "@mediapipe/tasks-vision";
import { useEffect, useRef, useState } from "react";


export default function PoseFace() {
  const [cameraMode, setCameraMode] = useState("user");
  const webcam = useRef();
  const [detectFlag, setDetectFlag] = useState(false);
  const poseLandmarker = useRef();
  const faceLandmarker = useRef();
  const drawingUtils = useRef();
  const canvasRef = useRef();
  const ctxRef = useRef();
  const [cameraOK, setCameraOK] = useState(false);
  const [settingOK, setSettingOK] = useState(false);
  useEffect(() => {
    const createLandmarkers = async () => {
      const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
      );
      poseLandmarker.current = await PoseLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: "./models/pose_landmarker_lite.task",
          delegate: "CPU",
        },
        runningMode: "VIDEO",
        numPoses: 2,
      });
      faceLandmarker.current = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: {
          modelAssetPath: "./models/face_landmarker.task",
          delegate: "CPU",
        },
        outputFaceBlendshapes: true,
        runningMode: "VIDEO",
        numFaces: 2,
      });
      setSettingOK(true);
    };
    createLandmarkers();
  }, []);

  function loop() {
    ctxRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    let startTime = performance.now();
    poseLandmarker.current.detectForVideo(
      webcam.current.video,
      startTime,
      (result) => {
        for (const landmark of result.landmarks) {
          drawingUtils.current.drawLandmarks(
            landmark.slice(11),
            {
              radius: (data) =>
                DrawingUtils.lerp(data.from.z, -0.15, 0.1, 5, 1),
            }
          );
          drawingUtils.current.drawConnectors(
            landmark.map((d, i) => (i < 11 ? null : d)),
            PoseLandmarker.POSE_CONNECTIONS,
            { color: "#70ff7070", lineWidth: 6 }
          );
        }
      }
    );
    const faceResult = faceLandmarker.current.detectForVideo(
      webcam.current.video,
      startTime
    );
    if (faceResult && faceResult.faceLandmarks) {
      for (const landmark of faceResult.faceLandmarks) {
        drawingUtils.current.drawConnectors(
          landmark,
          FaceLandmarker.FACE_LANDMARKS_TESSELATION,
          { color: "#c0c0c070", lineWidth: 1 }
        );
        drawingUtils.current.drawConnectors(
          landmark,
          FaceLandmarker.FACE_LANDMARKS_LEFT_EYE,
          { color: "#30ff30", lineWidth: 2 }
        );
        drawingUtils.current.drawConnectors(
          landmark,
          FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE,
          { color: "#30ff30", lineWidth: 2 }
        );
        drawingUtils.current.drawConnectors(
          landmark,
          FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW,
          { color: "#30ff30", lineWidth: 2 }
        );
        drawingUtils.current.drawConnectors(
          landmark,
          FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW,
          { color: "#30ff30", lineWidth: 2 }
        );
        drawingUtils.current.drawConnectors(
          landmark,
          FaceLandmarker.FACE_LANDMARKS_FACE_OVAL,
          { color: "#30ff3077", lineWidth: 4 }
        );
        drawingUtils.current.drawConnectors(
          landmark,
          FaceLandmarker.FACE_LANDMARKS_LIPS,
          { color: "#30ff30", lineWidth: 2 }
        );
        drawingUtils.current.drawConnectors(
          landmark,
          FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS,
          { color: "#ff3030", lineWidth: 2 }
        );
        drawingUtils.current.drawConnectors(
          landmark,
          FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS,
          { color: "#ff3030", lineWidth: 2 }
        );
      }
    }

    requestAnimationFrame(loop);
  }

  useEffect(() => {
    if (detectFlag) {
      canvasRef.current.width = webcam.current.video.clientWidth;
      canvasRef.current.height = webcam.current.video.clientHeight;
      ctxRef.current = canvasRef.current.getContext("2d");
      drawingUtils.current = new DrawingUtils(ctxRef.current);
      loop();
    }
    // eslint-disable-next-line
  }, [detectFlag]);

  return (
    <Container className="mt-5">
      <div className="py-2 d-flex align-items-center gap-2">
        <Button
          className="ms-3"
          onClick={() => setDetectFlag(true)}
          disabled={!(cameraOK && settingOK)}
        >
          検出を開始
        </Button>
        <Form.Select
          defaultValue={cameraMode}
          disabled={detectFlag}
          onChange={(e) => setCameraMode(e.target.value)}
          style={{
            width: "200px",
          }}
        >
          <option value="user">フロントカメラ</option>
          <option value="environment">リアカメラ</option>
        </Form.Select>
      </div>
      <div className="position-relative">
        <Webcam
          style={{
            width: "100%",
            maxWidth: "800px",
          }}
          audio={false}
          ref={webcam}
          videoConstraints={{
            facingMode:
              cameraMode === "environment" ? { exact: "environment" } : "user",
          }}
          onUserMedia={() => {
            setCameraOK(true);
          }}
        />
        <canvas className="position-absolute top-0 start-0" ref={canvasRef} />
      </div>
    </Container>
  );
}
