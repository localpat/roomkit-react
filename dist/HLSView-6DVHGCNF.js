import {
    APP_DATA,
    Box,
    Button,
    ChatToggle,
    Dialog,
    DialogContent,
    DialogRow,
    Dropdown,
    EMOJI_REACTION_TYPE,
    Flex,
    IconButton,
    IconButton_default,
    LeaveRoom,
    Loading,
    Logo,
    POLL_STATE,
    POLL_VIEWS,
    RoomDetailsRow,
    SIDE_PANE_OPTIONS,
    Sheet,
    Slider,
    Text,
    ToastManager,
    Tooltip,
    WaitingView,
    __async,
    __objRest,
    __spreadProps,
    __spreadValues,
    config,
    init_define_process_env,
    styled,
    theme,
    useIsLandscape,
    useIsSidepaneTypeOpen,
    useKeyboardHandler,
    useRoomLayoutConferencingScreen,
    useRoomLayoutHeader,
    useSidepaneToggle,
    useTheme
  } from "./chunk-QI3A7VZI.js";
  
  // src/Prebuilt/layouts/HLSView.jsx
  init_define_process_env();
  import React15, { useCallback as useCallback3, useEffect as useEffect3, useRef, useState as useState4 } from "react";
  import { useFullscreen, useMedia as useMedia4, usePrevious, useToggle } from "react-use";
  import { HLSPlaybackState, HMSHLSPlayer, HMSHLSPlayerEvents as HMSHLSPlayerEvents2 } from "@100mslive/hls-player";
  import screenfull from "screenfull";
  import { match, P } from "ts-pattern";
  import {
    HLSPlaylistType,
    HMSNotificationTypes,
    selectAppData,
    selectHLSState,
    selectPeerNameByID,
    selectPollByID,
    useHMSActions,
    useHMSNotifications,
    useHMSStore,
    useHMSVanillaStore
  } from "@100mslive/react-sdk";
  import { ColoredHandIcon, GoLiveIcon } from "@100mslive/react-icons";
  
  // src/Prebuilt/components/HlsStatsOverlay.jsx
  init_define_process_env();
  import React, { memo } from "react";
  import { CrossIcon } from "@100mslive/react-icons";
  function HlsStatsOverlay({ hlsStatsState, onClose }) {
    var _a, _b, _c;
    return /* @__PURE__ */ React.createElement(
      Flex,
      {
        css: {
          position: "absolute",
          width: "$80",
          marginLeft: "$8",
          padding: "$8 $8 $10",
          zIndex: 10,
          backgroundColor: "$surface_brighter",
          borderRadius: "$1"
        },
        direction: "column"
      },
      /* @__PURE__ */ React.createElement(IconButton_default, { css: { position: "absolute", top: "$2", right: "$2" }, onClick: onClose }, /* @__PURE__ */ React.createElement(CrossIcon, null)),
      /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "URL" }, /* @__PURE__ */ React.createElement(Flex, { align: "center" }, /* @__PURE__ */ React.createElement(
        "a",
        {
          style: { cursor: "pointer", textDecoration: "underline" },
          href: hlsStatsState == null ? void 0 : hlsStatsState.url,
          target: "_blank",
          rel: "noreferrer"
        },
        "Stream url"
      ))),
      /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "Video size" }, ` ${(_a = hlsStatsState == null ? void 0 : hlsStatsState.videoSize) == null ? void 0 : _a.width}x${(_b = hlsStatsState == null ? void 0 : hlsStatsState.videoSize) == null ? void 0 : _b.height}`),
      /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "Buffer duration" }, (_c = hlsStatsState == null ? void 0 : hlsStatsState.bufferedDuration) == null ? void 0 : _c.toFixed(2), " "),
      /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "Connection speed" }, `${((hlsStatsState == null ? void 0 : hlsStatsState.bandwidthEstimate) / (1e3 * 1e3)).toFixed(2)} Mbps`),
      /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "Bitrate" }, `${((hlsStatsState == null ? void 0 : hlsStatsState.bitrate) / (1e3 * 1e3)).toFixed(2)} Mbps`),
      /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "distance from live" }, getDurationFromSeconds(hlsStatsState.distanceFromLive / 1e3)),
      /* @__PURE__ */ React.createElement(HlsStatsRow, { label: "Dropped frames" }, hlsStatsState == null ? void 0 : hlsStatsState.droppedFrames)
    );
  }
  function getDurationFromSeconds(timeInSeconds) {
    let time = Math.floor(timeInSeconds);
    const hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    const prefixedMinutes = `${minutes < 10 ? "0" + minutes : minutes}`;
    const prefixedSeconds = `${seconds < 10 ? "0" + seconds : seconds}`;
    let videoTimeStr = `${prefixedMinutes}:${prefixedSeconds}`;
    if (hours) {
      const prefixedHours = `${hours < 10 ? "0" + hours : hours}`;
      videoTimeStr = `${prefixedHours}:${prefixedMinutes}:${prefixedSeconds}`;
    }
    return videoTimeStr;
  }
  var HlsStatsRow = memo(({ label, children }) => {
    return /* @__PURE__ */ React.createElement(Flex, { gap: 4, justify: "center", css: { width: "100%" } }, /* @__PURE__ */ React.createElement(
      Text,
      {
        css: {
          width: "50%",
          "@md": { fontSize: "$md" },
          "@sm": { fontSize: "$sm" }
          // textAlign: "right",
        }
      },
      label
    ), /* @__PURE__ */ React.createElement(
      Text,
      {
        css: {
          "@md": { fontSize: "$md" },
          "@sm": { fontSize: "$sm" },
          width: "50%",
          overflowWrap: "break-word"
          // textAlign: "left",
        }
      },
      children
    ));
  });
  
  // src/Prebuilt/components/HMSVideo/index.ts
  init_define_process_env();
  
  // src/Prebuilt/components/HMSVideo/Controls.jsx
  init_define_process_env();
  var VideoControls = styled(Flex, {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    width: "100%",
    gap: "$2"
  });
  var LeftControls = styled(Flex, {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    gap: "$4"
  });
  var RightControls = styled(Flex, {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    gap: "$4"
  });
  
  // src/Prebuilt/components/HMSVideo/HMSVideo.jsx
  init_define_process_env();
  import React2, { forwardRef } from "react";
  var HMSVideo = forwardRef((_a, videoRef) => {
    var _b = _a, { children } = _b, props = __objRest(_b, ["children"]);
    return /* @__PURE__ */ React2.createElement(
      Flex,
      __spreadValues({
        "data-testid": "hms-video",
        css: {
          size: "100%",
          position: "relative",
          justifyContent: "center",
          transition: "all 0.3s ease-in-out",
          "@md": {
            height: "auto",
            "& video": {
              height: "$60 !important"
            }
          },
          "& video::cue": {
            // default for on-surface-high
            color: "#EFF0FA",
            whiteSpace: "pre-line",
            fontSize: "$sm",
            fontStyle: "normal",
            fontWeight: "$regular",
            lineHeight: "$sm",
            letterSpacing: "0.25px"
          },
          "& video::-webkit-media-text-track-display": {
            padding: "0 $4",
            boxShadow: "0px 1px 3px 0px #000000A3"
          },
          "& video::-webkit-media-text-track-container": {
            fontSize: "$space$10 !important"
          }
        },
        direction: "column"
      }, props),
      /* @__PURE__ */ React2.createElement(
        "video",
        {
          style: {
            margin: "0 auto",
            objectFit: "contain",
            width: "auto",
            height: "100%",
            maxWidth: "100%"
          },
          ref: videoRef,
          playsInline: true,
          disablePictureInPicture: true
        }
      ),
      children
    );
  });
  
  // src/Prebuilt/components/HMSVideo/PlayPauseSeekControls.tsx
  init_define_process_env();
  import React6 from "react";
  import { useMedia } from "react-use";
  import { BackwardArrowIcon, ForwardArrowIcon } from "@100mslive/react-icons";
  
  // src/Prebuilt/components/HMSVideo/PlayPauseButton.tsx
  init_define_process_env();
  import React4 from "react";
  import { PauseIcon, PlayIcon } from "@100mslive/react-icons";
  
  // src/Prebuilt/components/HMSVideo/PlayerContext.tsx
  init_define_process_env();
  import React3, { useContext } from "react";
  var HMSPlayerContext = React3.createContext({
    hlsPlayer: void 0
  });
  var useHMSPlayerContext = () => {
    const context = useContext(HMSPlayerContext);
    return context;
  };
  
  // src/Prebuilt/components/HMSVideo/PlayPauseButton.tsx
  var PlayPauseButton = ({
    isPaused,
    width = 20,
    height = 20
  }) => {
    const { hlsPlayer: hlsPlayer2 } = useHMSPlayerContext();
    const onClick = (event) => __async(void 0, null, function* () {
      event == null ? void 0 : event.stopPropagation();
      isPaused ? yield hlsPlayer2 == null ? void 0 : hlsPlayer2.play() : hlsPlayer2 == null ? void 0 : hlsPlayer2.pause();
    });
    return /* @__PURE__ */ React4.createElement(Tooltip, { title: isPaused ? "Play" : "Pause", side: "top" }, /* @__PURE__ */ React4.createElement(IconButton, { onClick, "data-testid": "play_pause_btn" }, isPaused ? /* @__PURE__ */ React4.createElement(PlayIcon, { width, height }) : /* @__PURE__ */ React4.createElement(PauseIcon, { width, height })));
  };
  
  // src/Prebuilt/components/HMSVideo/SeekControl.tsx
  init_define_process_env();
  import React5 from "react";
  var SeekControl = ({
    title,
    onClick,
    children,
    css
  }) => {
    return /* @__PURE__ */ React5.createElement(Tooltip, { title, side: "top" }, /* @__PURE__ */ React5.createElement(IconButton, { onClick, "data-testid": "backward_forward_arrow_btn", css }, children));
  };
  
  // src/Prebuilt/components/HMSVideo/PlayPauseSeekControls.tsx
  var PlayPauseSeekControls = ({
    isPaused,
    onSeekTo
  }) => {
    return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(
      SeekControl,
      {
        onClick: (e) => {
          e.stopPropagation();
          onSeekTo(-10);
        },
        title: "backward"
      },
      /* @__PURE__ */ React6.createElement(BackwardArrowIcon, { width: 20, height: 20 })
    ), /* @__PURE__ */ React6.createElement(PlayPauseButton, { isPaused }), /* @__PURE__ */ React6.createElement(
      SeekControl,
      {
        onClick: (e) => {
          e.stopPropagation();
          onSeekTo(10);
        },
        title: "forward"
      },
      /* @__PURE__ */ React6.createElement(ForwardArrowIcon, { width: 20, height: 20 })
    ));
  };
  var PlayPauseSeekOverlayControls = ({
    isPaused,
    showControls,
    hoverControlsVisible
  }) => {
    const isMobile = useMedia(config.media.md);
    const isLandscape = useIsLandscape();
    if (!isMobile && !isLandscape) {
      return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement(
        Flex,
        {
          css: {
            bg: "rgba(0, 0, 0, 0.6)",
            r: "$round",
            size: "$24",
            visibility: hoverControlsVisible.seekBackward ? `` : `hidden`,
            opacity: hoverControlsVisible.seekBackward ? `1` : "0"
          },
          direction: "column",
          align: "center"
        },
        /* @__PURE__ */ React6.createElement(SeekControl, { title: "backward" }, /* @__PURE__ */ React6.createElement(BackwardArrowIcon, { width: 52, height: 52 })),
        /* @__PURE__ */ React6.createElement(Text, { variant: "body2", css: { fontWeight: "$regular" } }, "10 secs")
      ), /* @__PURE__ */ React6.createElement(
        Box,
        {
          css: {
            bg: "rgba(0, 0, 0, 0.6)",
            r: "$round",
            visibility: hoverControlsVisible.pausePlay ? `` : `hidden`,
            opacity: hoverControlsVisible.pausePlay ? `1` : "0"
          }
        },
        /* @__PURE__ */ React6.createElement(PlayPauseButton, { isPaused, width: 48, height: 48 })
      ), /* @__PURE__ */ React6.createElement(
        Flex,
        {
          css: {
            bg: "rgba(0, 0, 0, 0.6)",
            r: "$round",
            size: "$24",
            visibility: hoverControlsVisible.seekForward ? `` : `hidden`,
            opacity: hoverControlsVisible.seekForward ? `1` : "0"
          },
          direction: "column",
          align: "center"
        },
        /* @__PURE__ */ React6.createElement(SeekControl, { title: "forward" }, /* @__PURE__ */ React6.createElement(ForwardArrowIcon, { width: 52, height: 52 })),
        /* @__PURE__ */ React6.createElement(Text, { variant: "body2", css: { fontWeight: "$regular" } }, "10 secs")
      ));
    }
    return /* @__PURE__ */ React6.createElement(
      Flex,
      {
        align: "center",
        justify: "center",
        css: {
          position: "absolute",
          bg: "#00000066",
          display: "inline-flex",
          gap: "$2",
          zIndex: 1,
          size: "100%",
          visibility: showControls ? `` : `hidden`,
          opacity: showControls ? `1` : "0"
        }
      },
      /* @__PURE__ */ React6.createElement(
        SeekControl,
        {
          title: "backward",
          css: {
            visibility: hoverControlsVisible.seekBackward ? `` : `hidden`,
            opacity: hoverControlsVisible.seekBackward ? `1` : "0"
          }
        },
        /* @__PURE__ */ React6.createElement(BackwardArrowIcon, { width: 32, height: 32 })
      ),
      /* @__PURE__ */ React6.createElement(
        Box,
        {
          css: {
            bg: "rgba(0, 0, 0, 0.6)",
            r: "$round"
          }
        },
        /* @__PURE__ */ React6.createElement(PlayPauseButton, { isPaused, width: 48, height: 48 })
      ),
      /* @__PURE__ */ React6.createElement(
        SeekControl,
        {
          title: "forward",
          css: {
            visibility: hoverControlsVisible.seekForward ? `` : `hidden`,
            opacity: hoverControlsVisible.seekForward ? `1` : "0"
          }
        },
        /* @__PURE__ */ React6.createElement(ForwardArrowIcon, { width: 32, height: 32 })
      )
    );
  };
  
  // src/Prebuilt/components/HMSVideo/VideoProgress.tsx
  init_define_process_env();
  import React7, { useCallback, useEffect, useState } from "react";
  
  // src/Prebuilt/components/HMSVideo/utils.ts
  init_define_process_env();
  function getPercentage(a, b) {
    return a / b * 100;
  }
  function getDurationFromSeconds2(timeInSeconds) {
    let time = Math.floor(timeInSeconds);
    const hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    const prefixedMinutes = `${minutes < 10 ? `0${minutes}` : minutes}`;
    const prefixedSeconds = `${seconds < 10 ? `0${seconds}` : seconds}`;
    let videoTimeStr = `${prefixedMinutes}:${prefixedSeconds}`;
    if (hours) {
      const prefixedHours = `${hours < 10 ? `0${hours}` : hours}`;
      videoTimeStr = `${prefixedHours}:${prefixedMinutes}:${prefixedSeconds}`;
    }
    return videoTimeStr;
  }
  function getDuration(videoEl) {
    if (isFinite(videoEl.duration)) {
      return videoEl.duration;
    }
    if (videoEl.seekable.length > 0) {
      return videoEl.seekable.end(0);
    }
    return 0;
  }
  
  // src/Prebuilt/components/HMSVideo/VideoProgress.tsx
  var VideoProgress = ({
    seekProgress,
    setSeekProgress
  }) => {
    const { hlsPlayer: hlsPlayer2 } = useHMSPlayerContext();
    const [videoProgress, setVideoProgress] = useState(0);
    const [bufferProgress, setBufferProgress] = useState(0);
    const videoEl = hlsPlayer2 == null ? void 0 : hlsPlayer2.getVideoElement();
    const setProgress = useCallback(() => {
      var _a;
      if (!videoEl) {
        return;
      }
      const duration = getDuration(videoEl);
      const videoProgress2 = Math.floor(getPercentage(videoEl.currentTime, duration));
      let bufferProgress2 = 0;
      if (videoEl.buffered.length > 0) {
        bufferProgress2 = Math.floor(getPercentage((_a = videoEl.buffered) == null ? void 0 : _a.end(0), duration));
      }
      if (!isNaN(videoProgress2)) {
        setVideoProgress(videoProgress2);
      }
      if (!isNaN(bufferProgress2)) {
        setBufferProgress(bufferProgress2);
      }
    }, [videoEl]);
    const timeupdateHandler = useCallback(() => {
      if (!videoEl || seekProgress) {
        return;
      }
      setProgress();
    }, [seekProgress, setProgress, videoEl]);
    useEffect(() => {
      if (!videoEl) {
        return;
      }
      setProgress();
      videoEl.addEventListener("timeupdate", timeupdateHandler);
      return function cleanup() {
        videoEl == null ? void 0 : videoEl.removeEventListener("timeupdate", timeupdateHandler);
      };
    }, [setProgress, timeupdateHandler, videoEl]);
    const onProgress = (progress) => {
      var _a;
      const progress1 = Math.floor(getPercentage(progress[0], 100));
      const videoEl2 = hlsPlayer2 == null ? void 0 : hlsPlayer2.getVideoElement();
      if (!videoEl2) {
        return;
      }
      const duration = isFinite(videoEl2.duration) ? videoEl2.duration : ((_a = videoEl2.seekable) == null ? void 0 : _a.end(0)) || 0;
      const currentTime = progress1 * duration / 100;
      hlsPlayer2 == null ? void 0 : hlsPlayer2.seekTo(currentTime);
      setProgress();
    };
    if (!videoEl) {
      return null;
    }
    return /* @__PURE__ */ React7.createElement(Flex, { align: "center", css: { cursor: "pointer", h: "$2", alignSelf: "stretch" } }, /* @__PURE__ */ React7.createElement(
      Slider,
      {
        id: "video-actual-rest",
        css: {
          cursor: "pointer",
          h: "$2",
          zIndex: 1,
          transition: `all .2s ease .5s`
        },
        min: 0,
        max: 100,
        step: 1,
        value: [videoProgress],
        showTooltip: false,
        onValueChange: onProgress,
        onPointerDown: () => setSeekProgress(true),
        onPointerUp: () => setSeekProgress(false),
        thumbStyles: { w: "$6", h: "$6" }
      }
    ), /* @__PURE__ */ React7.createElement(
      Box,
      {
        id: "video-buffer",
        css: {
          h: "$2",
          width: `${bufferProgress - videoProgress}%`,
          background: "$on_surface_high",
          position: "absolute",
          left: `${videoProgress}%`,
          opacity: "25%"
        }
      }
    ));
  };
  
  // src/Prebuilt/components/HMSVideo/VideoTime.tsx
  init_define_process_env();
  import React8, { useCallback as useCallback2, useEffect as useEffect2, useState as useState2 } from "react";
  import { HMSHLSPlayerEvents } from "@100mslive/hls-player";
  var VideoTime = () => {
    const { hlsPlayer: hlsPlayer2 } = useHMSPlayerContext();
    const [videoTime, setVideoTime] = useState2(getDurationFromSeconds2(0));
    const updateTime = useCallback2(
      (currentTime) => {
        const videoEl = hlsPlayer2 == null ? void 0 : hlsPlayer2.getVideoElement();
        if (videoEl) {
          const duration = getDuration(videoEl);
          setVideoTime(getDurationFromSeconds2(duration - currentTime));
        } else {
          setVideoTime(getDurationFromSeconds2(currentTime));
        }
      },
      [hlsPlayer2]
    );
    useEffect2(() => {
      const timeupdateHandler = (currentTime) => {
        updateTime(currentTime);
      };
      if (hlsPlayer2) {
        hlsPlayer2.on(HMSHLSPlayerEvents.CURRENT_TIME, timeupdateHandler);
        const videoEl = hlsPlayer2 == null ? void 0 : hlsPlayer2.getVideoElement();
        updateTime(videoEl.currentTime);
      }
      return function cleanup() {
        hlsPlayer2 == null ? void 0 : hlsPlayer2.off(HMSHLSPlayerEvents.CURRENT_TIME, timeupdateHandler);
      };
    }, [hlsPlayer2, updateTime]);
    return hlsPlayer2 ? /* @__PURE__ */ React8.createElement(
      Text,
      {
        variant: "body1",
        css: {
          minWidth: "$16",
          c: "$on_surface_medium",
          display: "flex",
          justifyContent: "center",
          fontWeight: "$regular"
        }
      },
      "-",
      videoTime
    ) : null;
  };
  
  // src/Prebuilt/components/HMSVideo/VolumeControl.tsx
  init_define_process_env();
  import React9, { useState as useState3 } from "react";
  import { VolumeOneIcon, VolumeTwoIcon, VolumeZeroIcon } from "@100mslive/react-icons";
  var VolumeControl = () => {
    var _a;
    const { hlsPlayer: hlsPlayer2 } = useHMSPlayerContext();
    const [volume, setVolume] = useState3((_a = hlsPlayer2 == null ? void 0 : hlsPlayer2.volume) != null ? _a : 100);
    const [showSlider, setShowSlider] = useState3(false);
    return /* @__PURE__ */ React9.createElement(
      Flex,
      {
        align: "center",
        css: { color: "$on_surface_high" },
        onMouseOver: (event) => {
          event.stopPropagation();
          setShowSlider(true);
        },
        onMouseLeave: (event) => {
          event.stopPropagation();
          setShowSlider(false);
        }
      },
      /* @__PURE__ */ React9.createElement(
        VolumeIcon,
        {
          volume,
          onClick: () => {
            if (volume > 0) {
              setVolume(0);
              hlsPlayer2 == null ? void 0 : hlsPlayer2.setVolume(0);
            } else {
              setVolume(100);
              hlsPlayer2 == null ? void 0 : hlsPlayer2.setVolume(100);
            }
          }
        }
      ),
      /* @__PURE__ */ React9.createElement(
        Slider,
        {
          css: {
            mx: "$4",
            w: "$20",
            cursor: "pointer",
            "@sm": { w: "$14" },
            "@xs": { w: "$14" },
            opacity: showSlider ? "1" : "0",
            display: showSlider ? "" : "none",
            transition: `all .2s ease .5s`
          },
          min: 0,
          max: 100,
          step: 1,
          value: [volume],
          onValueChange: (volume2) => {
            hlsPlayer2 == null ? void 0 : hlsPlayer2.setVolume(volume2[0]);
            setVolume(volume2[0]);
          },
          thumbStyles: { w: "$6", h: "$6" }
        }
      )
    );
  };
  var VolumeIcon = ({ volume, onClick }) => {
    if (volume === 0) {
      return /* @__PURE__ */ React9.createElement(VolumeZeroIcon, { style: { cursor: "pointer", transition: "color 0.3s" }, onClick });
    }
    return volume < 50 ? /* @__PURE__ */ React9.createElement(VolumeOneIcon, { style: { cursor: "pointer", transition: "color 0.3s" }, onClick }) : /* @__PURE__ */ React9.createElement(VolumeTwoIcon, { style: { cursor: "pointer", transition: "color 0.3s" }, onClick });
  };
  
  // src/Prebuilt/components/HMSVideo/index.ts
  var HMSVideoPlayer = {
    Root: HMSVideo,
    Progress: VideoProgress,
    Duration: VideoTime,
    Volume: VolumeControl,
    Controls: {
      Root: VideoControls,
      Left: LeftControls,
      Right: RightControls
    },
    PlayPauseSeekControls: {
      Overlay: PlayPauseSeekOverlayControls,
      Button: PlayPauseSeekControls
    }
  };
  
  // src/Prebuilt/components/HMSVideo/FullscreenButton.tsx
  init_define_process_env();
  import React10 from "react";
  import { ExpandIcon, ShrinkIcon } from "@100mslive/react-icons";
  var FullScreenButton = ({ isFullScreen, onToggle }) => {
    return /* @__PURE__ */ React10.createElement(Tooltip, { title: `${isFullScreen ? "Exit" : "Go"} fullscreen`, side: "top" }, /* @__PURE__ */ React10.createElement(IconButton, { css: { margin: "0px" }, onClick: onToggle, key: "fullscreen_btn", "data-testid": "fullscreen_btn" }, /* @__PURE__ */ React10.createElement(Flex, null, isFullScreen ? /* @__PURE__ */ React10.createElement(ShrinkIcon, null) : /* @__PURE__ */ React10.createElement(ExpandIcon, null))));
  };
  
  // src/Prebuilt/components/HMSVideo/HLSAutoplayBlockedPrompt.tsx
  init_define_process_env();
  import React11 from "react";
  import { useMedia as useMedia2 } from "react-use";
  import { VolumeTwoIcon as VolumeTwoIcon2 } from "@100mslive/react-icons";
  function HLSAutoplayBlockedPrompt({
    open,
    unblockAutoPlay
  }) {
    const isLandscape = useIsLandscape();
    const isMobile = useMedia2(config.media.md);
    if ((isMobile || isLandscape) && open) {
      return /* @__PURE__ */ React11.createElement(
        IconButton,
        {
          css: {
            border: "1px solid white",
            bg: "white",
            color: "#000",
            r: "$2"
          },
          onClick: () => __async(this, null, function* () {
            return yield unblockAutoPlay();
          })
        },
        /* @__PURE__ */ React11.createElement(VolumeTwoIcon2, { width: "32", height: "32" }),
        /* @__PURE__ */ React11.createElement(
          Text,
          {
            variant: "body1",
            css: {
              fontWeight: "$semiBold",
              px: "$2",
              color: "#000"
            }
          },
          "Tap To Unmute"
        )
      );
    }
    return /* @__PURE__ */ React11.createElement(
      Dialog.Root,
      {
        open,
        onOpenChange: (value) => __async(this, null, function* () {
          if (!value) {
            yield unblockAutoPlay();
          }
        })
      },
      /* @__PURE__ */ React11.createElement(DialogContent, { title: "Attention", closeable: false }, /* @__PURE__ */ React11.createElement(DialogRow, null, /* @__PURE__ */ React11.createElement(Text, { variant: "md" }, 'The browser wants us to get a confirmation for playing the HLS Stream. Please click "play stream" to proceed.')), /* @__PURE__ */ React11.createElement(DialogRow, { justify: "end" }, /* @__PURE__ */ React11.createElement(
        Button,
        {
          variant: "primary",
          onClick: () => __async(this, null, function* () {
            yield unblockAutoPlay();
          })
        },
        "Play stream"
      )))
    );
  }
  
  // src/Prebuilt/components/HMSVideo/HLSCaptionSelector.tsx
  init_define_process_env();
  import React12 from "react";
  import { ClosedCaptionIcon, OpenCaptionIcon } from "@100mslive/react-icons";
  function HLSCaptionSelector({ isEnabled }) {
    const { hlsPlayer: hlsPlayer2 } = useHMSPlayerContext();
    return /* @__PURE__ */ React12.createElement(Tooltip, { title: "Subtitles/closed captions", side: "top" }, /* @__PURE__ */ React12.createElement(IconButton, { css: { p: "$2" }, onClick: () => hlsPlayer2 == null ? void 0 : hlsPlayer2.toggleCaption() }, isEnabled ? /* @__PURE__ */ React12.createElement(ClosedCaptionIcon, { width: "20", height: "20px" }) : /* @__PURE__ */ React12.createElement(OpenCaptionIcon, { width: "20", height: "20px" })));
  }
  
  // src/Prebuilt/components/HMSVideo/HLSQualitySelector.tsx
  init_define_process_env();
  import React13 from "react";
  import { useMedia as useMedia3 } from "react-use";
  import { CheckIcon, CrossIcon as CrossIcon2, SettingsIcon } from "@100mslive/react-icons";
  function HLSQualitySelector({
    open,
    onOpenChange,
    layers,
    onQualityChange,
    selection,
    isAuto,
    containerRef
  }) {
    const isMobile = useMedia3(config.media.md);
    const isLandscape = useIsLandscape();
    if (layers.length === 0) {
      return null;
    }
    if (isMobile || isLandscape) {
      return /* @__PURE__ */ React13.createElement(Sheet.Root, { open, onOpenChange }, /* @__PURE__ */ React13.createElement(Sheet.Trigger, { asChild: true, "data-testid": "quality_selector" }, /* @__PURE__ */ React13.createElement(
        Flex,
        {
          css: {
            color: "$on_primary_high",
            r: "$1",
            cursor: "pointer",
            p: "$2"
          }
        },
        /* @__PURE__ */ React13.createElement(SettingsIcon, null)
      )), /* @__PURE__ */ React13.createElement(
        Sheet.Content,
        {
          container: containerRef,
          css: { bg: "$surface_default", pb: "$1" },
          onClick: () => onOpenChange(false)
        },
        /* @__PURE__ */ React13.createElement(
          Sheet.Title,
          {
            css: {
              display: "flex",
              color: "$on_surface_high",
              w: "100%",
              justifyContent: "space-between",
              mt: "$8",
              fontSize: "$md",
              px: "$10",
              pb: "$8",
              borderBottom: "1px solid $border_bright",
              alignItems: "center"
            }
          },
          "Quality",
          /* @__PURE__ */ React13.createElement(Sheet.Close, { css: { color: "$on_surface_high" }, onClick: () => onOpenChange(false) }, /* @__PURE__ */ React13.createElement(CrossIcon2, null))
        ),
        layers.map((layer) => {
          return /* @__PURE__ */ React13.createElement(
            Flex,
            {
              align: "center",
              css: {
                w: "100%",
                bg: "$surface_default",
                "&:hover": {
                  bg: "$surface_brighter"
                },
                cursor: "pointer",
                gap: "$4",
                py: "$8",
                px: "$10"
              },
              key: layer.width,
              onClick: () => onQualityChange(layer)
            },
            /* @__PURE__ */ React13.createElement(Text, { variant: "caption", css: { fontWeight: "$semiBold" } }, getQualityText(layer)),
            /* @__PURE__ */ React13.createElement(Text, { variant: "caption", css: { flex: "1 1 0", c: "$on_surface_low", pl: "$2" } }, getBitrateText(layer)),
            !isAuto && layer.width === (selection == null ? void 0 : selection.width) && layer.height === (selection == null ? void 0 : selection.height) && /* @__PURE__ */ React13.createElement(CheckIcon, { width: "16px", height: "16px" })
          );
        }),
        /* @__PURE__ */ React13.createElement(
          Flex,
          {
            align: "center",
            css: {
              w: "100%",
              bg: "$surface_default",
              "&:hover": {
                bg: "$surface_brighter"
              },
              cursor: "pointer",
              gap: "$4",
              py: "$8",
              px: "$10"
            },
            key: "auto",
            onClick: () => onQualityChange({ height: "auto" })
          },
          /* @__PURE__ */ React13.createElement(Text, { variant: "caption", css: { fontWeight: "$semiBold", flex: "1 1 0" } }, "Auto"),
          isAuto && /* @__PURE__ */ React13.createElement(CheckIcon, { width: "16px", height: "16px" })
        )
      ));
    }
    return /* @__PURE__ */ React13.createElement(Dropdown.Root, { open, onOpenChange: (value) => onOpenChange(value), modal: false }, /* @__PURE__ */ React13.createElement(Dropdown.Trigger, { asChild: true, "data-testid": "quality_selector" }, /* @__PURE__ */ React13.createElement(
      Flex,
      {
        css: {
          color: "$on_primary_high",
          r: "$1",
          cursor: "pointer",
          p: "$2"
        }
      },
      /* @__PURE__ */ React13.createElement(Tooltip, { title: "Select Quality", side: "top" }, /* @__PURE__ */ React13.createElement(Flex, { align: "center" }, /* @__PURE__ */ React13.createElement(
        Box,
        {
          css: {
            w: "$9",
            h: "$9",
            display: "inline-flex",
            alignItems: "center",
            c: "$on_surface_high"
          }
        },
        /* @__PURE__ */ React13.createElement(SettingsIcon, null)
      ), /* @__PURE__ */ React13.createElement(
        Text,
        {
          variant: {
            "@md": "sm",
            "@sm": "xs",
            "@xs": "tiny"
          },
          css: { display: "flex", alignItems: "center", ml: "$2", c: "$on_surface_medium" }
        },
        isAuto && /* @__PURE__ */ React13.createElement(React13.Fragment, null, "Auto", /* @__PURE__ */ React13.createElement(
          Box,
          {
            css: {
              mx: "$2",
              w: "$2",
              h: "$2",
              background: "$on_surface_medium",
              r: "$1"
            }
          }
        )),
        selection && Math.min(selection.width || 0, selection.height || 0),
        "p"
      )))
    )), /* @__PURE__ */ React13.createElement(Dropdown.Portal, { container: containerRef }, /* @__PURE__ */ React13.createElement(
      Dropdown.Content,
      {
        sideOffset: 5,
        align: "end",
        css: {
          height: "auto",
          maxHeight: "$52",
          w: "$40",
          bg: "$surface_bright",
          py: "$4",
          gap: "$4",
          display: "grid"
        }
      },
      layers.map((layer) => {
        return /* @__PURE__ */ React13.createElement(
          Dropdown.Item,
          {
            onClick: () => onQualityChange(layer),
            key: layer.width,
            css: {
              bg: !isAuto && layer.width === (selection == null ? void 0 : selection.width) && layer.height === (selection == null ? void 0 : selection.height) ? "$surface_default" : "$surface_bright",
              "&:hover": {
                bg: "$surface_brighter"
              },
              p: "$2 $4 $2 $8",
              h: "$12",
              gap: "$2"
            }
          },
          /* @__PURE__ */ React13.createElement(Text, { variant: "caption", css: { fontWeight: "$semiBold" } }, getQualityText(layer)),
          /* @__PURE__ */ React13.createElement(Text, { variant: "caption", css: { flex: "1 1 0", c: "$on_surface_low", pl: "$2" } }, getBitrateText(layer)),
          !isAuto && layer.width === (selection == null ? void 0 : selection.width) && layer.height === (selection == null ? void 0 : selection.height) && /* @__PURE__ */ React13.createElement(CheckIcon, { width: "16px", height: "16px" })
        );
      }),
      /* @__PURE__ */ React13.createElement(
        Dropdown.Item,
        {
          onClick: () => onQualityChange({ height: "auto" }),
          key: "auto",
          css: {
            bg: !isAuto ? "$surface_bright" : "$surface_default",
            "&:hover": {
              bg: "$surface_brighter"
            },
            p: "$2 $4 $2 $8",
            h: "$12",
            gap: "$2"
          }
        },
        /* @__PURE__ */ React13.createElement(Text, { variant: "caption", css: { fontWeight: "$semiBold", flex: "1 1 0" } }, "Auto"),
        isAuto && /* @__PURE__ */ React13.createElement(CheckIcon, { width: "16px", height: "16px" })
      )
    )));
  }
  var getQualityText = (layer) => `${Math.min(layer.height || 0, layer.width || 0)}p `;
  var getBitrateText = (layer) => `(${(Number(layer.bitrate / 1e3) / 1e3).toFixed(2)} Mbps)`;
  
  // src/Prebuilt/components/HMSVideo/MwebHLSViewTitle.tsx
  init_define_process_env();
  import React14 from "react";
  import { ChevronDownIcon } from "@100mslive/react-icons";
  var HLSViewTitle = () => {
    const { title, details, description } = useRoomLayoutHeader();
    const toggleDetailsPane = useSidepaneToggle(SIDE_PANE_OPTIONS.ROOM_DETAILS);
    const isDetailSidepaneOpen = useIsSidepaneTypeOpen(SIDE_PANE_OPTIONS.ROOM_DETAILS);
    if (isDetailSidepaneOpen) {
      return /* @__PURE__ */ React14.createElement(
        Flex,
        {
          gap: "4",
          align: "center",
          justify: "between",
          css: {
            position: "relative",
            h: "fit-content",
            w: "100%",
            borderBottom: "1px solid $border_bright",
            p: "$8",
            backgroundColor: "$surface_dim"
          }
        },
        /* @__PURE__ */ React14.createElement(Text, { variant: "sub2", css: { fontWeight: "$semiBold" } }, "About Session"),
        /* @__PURE__ */ React14.createElement(
          Flex,
          {
            onClick: toggleDetailsPane,
            css: {
              color: "$on_surface_high",
              cursor: "pointer",
              "&:hover": { opacity: "0.8" }
            }
          },
          /* @__PURE__ */ React14.createElement(ChevronDownIcon, null)
        )
      );
    }
    return /* @__PURE__ */ React14.createElement(
      Flex,
      {
        gap: "4",
        align: "center",
        css: {
          position: "relative",
          h: "fit-content",
          w: "100%",
          borderBottom: "1px solid $border_bright",
          p: "$8",
          backgroundColor: "$surface_dim"
        }
      },
      /* @__PURE__ */ React14.createElement(Logo, null),
      /* @__PURE__ */ React14.createElement(Flex, { direction: "column" }, title ? /* @__PURE__ */ React14.createElement(Text, { variant: "sub2", css: { fontWeight: "$semiBold" } }, title) : null, /* @__PURE__ */ React14.createElement(Flex, null, /* @__PURE__ */ React14.createElement(RoomDetailsRow, { details }), description ? /* @__PURE__ */ React14.createElement(Text, { variant: "caption", css: { color: "$on_surface_medium" }, onClick: toggleDetailsPane }, "\xA0...more") : null))
    );
  };
  
  // src/Prebuilt/layouts/HLSView.jsx
  var hlsPlayer;
  var toastMap = {};
  var ToggleChat = ({ isFullScreen = false }) => {
    const { elements } = useRoomLayoutConferencingScreen();
    const sidepane = useHMSStore(selectAppData(APP_DATA.sidePane));
    const toggleChat = useSidepaneToggle(SIDE_PANE_OPTIONS.CHAT);
    const showChat = !!(elements == null ? void 0 : elements.chat);
    const isMobile = useMedia4(config.media.md);
    const hmsActions = useHMSActions();
    useEffect3(() => {
      match({ sidepane, isMobile, showChat, isFullScreen }).with({ isFullScreen: true }, () => {
        hmsActions.setAppData(APP_DATA.sidePane, "");
      }).with({ isMobile: true, showChat: true, sidepane: P.when((value) => !value) }, () => {
        toggleChat();
      }).with({ showChat: false, isMobile: true, sidepane: SIDE_PANE_OPTIONS.CHAT }, () => {
        hmsActions.setAppData(APP_DATA.sidePane, "");
      }).otherwise(() => {
      });
    }, [sidepane, isMobile, toggleChat, showChat, hmsActions, isFullScreen]);
    return null;
  };
  var HLSView = () => {
    var _a, _b, _c, _d, _e, _f, _g;
    const videoRef = useRef(null);
    const hlsViewRef = useRef();
    const { elements } = useRoomLayoutConferencingScreen();
    const hlsState = useHMSStore(selectHLSState);
    const enablHlsStats = useHMSStore(selectAppData(APP_DATA.hlsStats));
    const notification = useHMSNotifications(HMSNotificationTypes.POLL_STOPPED);
    const hmsActions = useHMSActions();
    const { themeType } = useTheme();
    const [streamEnded, setStreamEnded] = useState4(false);
    let [hlsStatsState, setHlsStatsState] = useState4(null);
    const hlsUrl = (_a = hlsState.variants[0]) == null ? void 0 : _a.url;
    const [availableLayers, setAvailableLayers] = useState4([]);
    const [isVideoLive, setIsVideoLive] = useState4(true);
    const [isCaptionEnabled, setIsCaptionEnabled] = useState4(true);
    const [hasCaptions, setHasCaptions] = useState4(false);
    const [currentSelectedQuality, setCurrentSelectedQuality] = useState4(null);
    const [isHlsAutoplayBlocked, setIsHlsAutoplayBlocked] = useState4(false);
    const [hoverControlsVisible, setHoverControlsVisible] = useState4({
      seekForward: false,
      pausePlay: false,
      seekBackward: false
    });
    const [isPaused, setIsPaused] = useState4(false);
    const [show, toggle] = useToggle(false);
    const lastHlsUrl = usePrevious(hlsUrl);
    const vanillaStore = useHMSVanillaStore();
    const [controlsVisible, setControlsVisible] = useState4(true);
    const [isUserSelectedAuto, setIsUserSelectedAuto] = useState4(true);
    const [qualityDropDownOpen, setQualityDropDownOpen] = useState4(false);
    const controlsRef = useRef(null);
    const controlsTimerRef = useRef();
    const [seekProgress, setSeekProgress] = useState4(false);
    const isFullScreenSupported = screenfull.isEnabled;
    const toggleChat = useSidepaneToggle(SIDE_PANE_OPTIONS.CHAT);
    const showChat = !!(elements == null ? void 0 : elements.chat);
    const isMobile = useMedia4(config.media.md);
    const isLandscape = useIsLandscape();
    const isFullScreen = useFullscreen(hlsViewRef, show, {
      onClose: () => toggle(false)
    });
    const [showLoader, setShowLoader] = useState4(false);
    useEffect3(() => {
      const videoEl = videoRef.current;
      const showLoader2 = () => setShowLoader(true);
      const hideLoader = () => setShowLoader(false);
      videoEl == null ? void 0 : videoEl.addEventListener("playing", hideLoader);
      videoEl == null ? void 0 : videoEl.addEventListener("waiting", showLoader2);
      return () => {
        videoEl == null ? void 0 : videoEl.removeEventListener("playing", hideLoader);
        videoEl == null ? void 0 : videoEl.removeEventListener("waiting", showLoader2);
      };
    }, []);
    useEffect3(() => {
      if (streamEnded && lastHlsUrl !== hlsUrl) {
        setStreamEnded(false);
      }
    }, [hlsUrl, streamEnded, lastHlsUrl]);
    useEffect3(() => {
      if (!notification)
        return;
      const toastID = toastMap == null ? void 0 : toastMap[notification.data.id];
      if (toastID) {
        ToastManager.removeToast(toastMap[notification.data.id]);
        delete toastMap[notification.data.id];
      }
    }, [notification]);
    useEffect3(() => {
      const videoElem = videoRef.current;
      const setStreamEndedCallback = () => {
        setStreamEnded(true);
        videoElem == null ? void 0 : videoElem.removeEventListener("ended", setStreamEndedCallback);
      };
      videoElem == null ? void 0 : videoElem.addEventListener("ended", setStreamEndedCallback);
      return () => {
        videoElem == null ? void 0 : videoElem.removeEventListener("ended", setStreamEndedCallback);
      };
    }, [hlsUrl]);
    const handleQuality = useCallback3(
      (quality) => {
        var _a2;
        if (hlsPlayer) {
          setIsUserSelectedAuto(((_a2 = quality.height) == null ? void 0 : _a2.toString().toLowerCase()) === "auto");
          hlsPlayer == null ? void 0 : hlsPlayer.setLayer(quality);
        }
      },
      [availableLayers]
      //eslint-disable-line
    );
    useEffect3(() => {
      let videoEl = videoRef.current;
      const manifestLoadedHandler = ({ layers }) => {
        setAvailableLayers(layers);
        setHasCaptions(hlsPlayer == null ? void 0 : hlsPlayer.hasCaptions());
      };
      const layerUpdatedHandler = ({ layer }) => {
        setCurrentSelectedQuality(layer);
      };
      const metadataLoadedHandler = (_a2) => {
        var _b2 = _a2, { payload } = _b2, rest = __objRest(_b2, ["payload"]);
        var _a3;
        const parsePayload = (str) => {
          try {
            return JSON.parse(str);
          } catch (e) {
            return str;
          }
        };
        const duration = rest.duration;
        const parsedPayload = parsePayload(payload);
        if (parsedPayload.startsWith("poll:")) {
          const pollId = parsedPayload.substr(parsedPayload.indexOf(":") + 1);
          const poll = vanillaStore.getState(selectPollByID(pollId));
          const pollStartedBy = vanillaStore.getState(selectPeerNameByID(poll.startedBy)) || "Participant";
          if (!toastMap[pollId]) {
            const toastID = ToastManager.addToast({
              title: `${pollStartedBy} started a ${poll.type}: ${poll.title}`,
              action: /* @__PURE__ */ React15.createElement(
                Button,
                {
                  onClick: () => {
                    hmsActions.setAppData(APP_DATA.pollState, {
                      [POLL_STATE.pollInView]: pollId,
                      [POLL_STATE.view]: POLL_VIEWS.VOTE
                    });
                    hmsActions.setAppData(APP_DATA.sidePane, SIDE_PANE_OPTIONS.POLLS);
                  },
                  variant: "standard",
                  css: {
                    backgroundColor: "$surface_bright",
                    fontWeight: "$semiBold",
                    color: "$on_surface_high",
                    p: "$xs $md"
                  }
                },
                poll.type === "quiz" ? "Answer" : "Vote"
              ),
              duration: Infinity
            });
            toastMap[pollId] = toastID;
          }
          return;
        }
        switch (parsedPayload.type) {
          case EMOJI_REACTION_TYPE:
            (_a3 = window.showFlyingEmoji) == null ? void 0 : _a3.call(window, { emojiId: parsedPayload == null ? void 0 : parsedPayload.emojiId, senderId: parsedPayload == null ? void 0 : parsedPayload.senderId });
            break;
          default: {
            const toast = {
              title: `Payload from timed Metadata ${parsedPayload}`,
              duration: duration || 3e3
            };
            console.debug("Added toast ", JSON.stringify(toast));
            ToastManager.addToast(toast);
            break;
          }
        }
      };
      const handleError = (data) => {
        console.error("[HLSView] error in hls", `${data}`);
      };
      const handleNoLongerLive = ({ isLive }) => {
        setIsVideoLive(isLive);
      };
      const playbackEventHandler = (data) => {
        setIsPaused(data.state === HLSPlaybackState.paused);
        setHoverControlsVisible(__spreadProps(__spreadValues({}, hoverControlsVisible), {
          pausePlay: true
        }));
        setTimeout(() => {
          setHoverControlsVisible(__spreadProps(__spreadValues({}, hoverControlsVisible), {
            pausePlay: false
          }));
        }, 2e3);
      };
      const captionEnabledEventHandler = (isCaptionEnabled2) => {
        setIsCaptionEnabled(isCaptionEnabled2);
      };
      const handleAutoplayBlock = (data) => setIsHlsAutoplayBlocked(!!data);
      if (videoEl && hlsUrl) {
        hlsPlayer = new HMSHLSPlayer(hlsUrl, videoEl);
        hlsPlayer.on(HMSHLSPlayerEvents2.SEEK_POS_BEHIND_LIVE_EDGE, handleNoLongerLive);
        hlsPlayer.on(HMSHLSPlayerEvents2.TIMED_METADATA_LOADED, metadataLoadedHandler);
        hlsPlayer.on(HMSHLSPlayerEvents2.ERROR, handleError);
        hlsPlayer.on(HMSHLSPlayerEvents2.PLAYBACK_STATE, playbackEventHandler);
        hlsPlayer.on(HMSHLSPlayerEvents2.CAPTION_ENABLED, captionEnabledEventHandler);
        hlsPlayer.on(HMSHLSPlayerEvents2.AUTOPLAY_BLOCKED, handleAutoplayBlock);
        hlsPlayer.on(HMSHLSPlayerEvents2.MANIFEST_LOADED, manifestLoadedHandler);
        hlsPlayer.on(HMSHLSPlayerEvents2.LAYER_UPDATED, layerUpdatedHandler);
        return () => {
          hlsPlayer.off(HMSHLSPlayerEvents2.SEEK_POS_BEHIND_LIVE_EDGE, handleNoLongerLive);
          hlsPlayer.off(HMSHLSPlayerEvents2.ERROR, handleError);
          hlsPlayer.off(HMSHLSPlayerEvents2.TIMED_METADATA_LOADED, metadataLoadedHandler);
          hlsPlayer.off(HMSHLSPlayerEvents2.PLAYBACK_STATE, playbackEventHandler);
          hlsPlayer.off(HMSHLSPlayerEvents2.CAPTION_ENABLED, captionEnabledEventHandler);
          hlsPlayer.off(HMSHLSPlayerEvents2.AUTOPLAY_BLOCKED, handleAutoplayBlock);
          hlsPlayer.off(HMSHLSPlayerEvents2.MANIFEST_LOADED, manifestLoadedHandler);
          hlsPlayer.off(HMSHLSPlayerEvents2.LAYER_UPDATED, layerUpdatedHandler);
          hlsPlayer.reset();
        };
      }
    }, [hlsUrl, vanillaStore, hmsActions]);
    useEffect3(() => {
      const onHLSStats = (state) => setHlsStatsState(state);
      if (enablHlsStats) {
        hlsPlayer == null ? void 0 : hlsPlayer.on(HMSHLSPlayerEvents2.STATS, onHLSStats);
      } else {
        hlsPlayer == null ? void 0 : hlsPlayer.off(HMSHLSPlayerEvents2.STATS, onHLSStats);
      }
      return () => {
        hlsPlayer == null ? void 0 : hlsPlayer.off(HMSHLSPlayerEvents2.STATS, onHLSStats);
      };
    }, [enablHlsStats]);
    const unblockAutoPlay = () => __async(void 0, null, function* () {
      try {
        yield hlsPlayer.play();
        setIsHlsAutoplayBlocked(false);
      } catch (error) {
        console.error("Tried to unblock Autoplay failed with", error.message);
      }
    });
    const sfnOverlayClose = () => {
      hmsActions.setAppData(APP_DATA.hlsStats, !enablHlsStats);
    };
    useEffect3(() => {
      if (controlsVisible && isFullScreen && !qualityDropDownOpen) {
        if (controlsTimerRef.current) {
          clearTimeout(controlsTimerRef.current);
        }
      }
      if (!isFullScreen && controlsTimerRef.current) {
        clearTimeout(controlsTimerRef.current);
      }
      controlsTimerRef.current = setTimeout(() => {
        if (!seekProgress) {
          setControlsVisible(false);
        }
      }, 5e3);
      return () => {
        if (controlsTimerRef.current) {
          clearTimeout(controlsTimerRef.current);
        }
      };
    }, [controlsVisible, isFullScreen, seekProgress, qualityDropDownOpen]);
    const onSeekTo = useCallback3(
      (seek) => {
        var _a2;
        match({ isLandscape, isMobile, seek }).with({ seek: -10, isMobile: false, isLandscape: false }, () => {
          setHoverControlsVisible(__spreadProps(__spreadValues({}, hoverControlsVisible), { seekBackward: true }));
          setTimeout(() => {
            setHoverControlsVisible(__spreadProps(__spreadValues({}, hoverControlsVisible), {
              seekBackward: false
            }));
          }, 1e3);
        }).with({ seek: 10, isMobile: false, isLandscape: false }, () => {
          setHoverControlsVisible(__spreadProps(__spreadValues({}, hoverControlsVisible), { seekForward: true }));
          setTimeout(() => {
            setHoverControlsVisible(__spreadProps(__spreadValues({}, hoverControlsVisible), {
              seekForward: false
            }));
          }, 1e3);
        }).otherwise(() => null);
        hlsPlayer == null ? void 0 : hlsPlayer.seekTo(((_a2 = videoRef.current) == null ? void 0 : _a2.currentTime) + seek);
      },
      [hoverControlsVisible, isLandscape, isMobile]
    );
    const onDoubleClickHandler = useCallback3(
      (event) => {
        var _a2;
        if (!(isMobile || isLandscape) || ((_a2 = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _a2.playlist_type) !== HLSPlaylistType.DVR) {
          return;
        }
        const sidePercentage = event.screenX * 100 / event.target.clientWidth;
        if (sidePercentage < 45) {
          setHoverControlsVisible(__spreadProps(__spreadValues({}, hoverControlsVisible), {
            seekBackward: true
          }));
          onSeekTo(-10);
        } else {
          setHoverControlsVisible(__spreadProps(__spreadValues({}, hoverControlsVisible), {
            seekForward: true
          }));
          onSeekTo(10);
        }
        setTimeout(() => {
          setHoverControlsVisible(__spreadProps(__spreadValues({}, hoverControlsVisible), {
            seekForward: false,
            seekBackward: false
          }));
        }, 1e3);
      },
      [hlsState == null ? void 0 : hlsState.variants, hoverControlsVisible, isLandscape, isMobile, onSeekTo]
    );
    const onClickHandler = useCallback3(() => __async(void 0, null, function* () {
      var _a2;
      match({ isMobile, isLandscape, playlist_type: (_a2 = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _a2.playlist_type }).with({ playlist_type: HLSPlaylistType.DVR, isMobile: false, isLandscape: false }, () => __async(void 0, null, function* () {
        if (isPaused) {
          yield hlsPlayer == null ? void 0 : hlsPlayer.play();
        } else {
          hlsPlayer == null ? void 0 : hlsPlayer.pause();
        }
      })).when(
        ({ isMobile: isMobile2, isLandscape: isLandscape2 }) => isMobile2 || isLandscape2,
        () => {
          setControlsVisible((value) => !value);
          if (controlsTimerRef.current) {
            clearTimeout(controlsTimerRef.current);
          }
        }
      ).otherwise(() => null);
    }), [hlsState == null ? void 0 : hlsState.variants, isLandscape, isMobile, isPaused]);
    const onHoverHandler = useCallback3(
      (event) => {
        event.preventDefault();
        if (isMobile || isLandscape) {
          return;
        }
        if (event.type === "mouseenter" || qualityDropDownOpen) {
          setControlsVisible(true);
          return;
        }
        if (event.type === "mouseleave" && !seekProgress) {
          setControlsVisible(false);
        } else if (!controlsVisible && event.type === "mousemove") {
          setControlsVisible(true);
          if (controlsTimerRef.current) {
            clearTimeout(controlsTimerRef.current);
          }
        }
      },
      [controlsVisible, isLandscape, isMobile, qualityDropDownOpen, seekProgress]
    );
    const keyHandler = useKeyboardHandler(isPaused, hlsPlayer);
    if (!hlsUrl || streamEnded) {
      return /* @__PURE__ */ React15.createElement(React15.Fragment, null, /* @__PURE__ */ React15.createElement(ToggleChat, null), hlsViewRef.current && (isMobile || isLandscape) && /* @__PURE__ */ React15.createElement(Box, { css: { position: "fixed", left: "$4", top: "$4", zIndex: 11 } }, /* @__PURE__ */ React15.createElement(LeaveRoom, { screenType: "hls_live_streaming", container: hlsViewRef.current })), /* @__PURE__ */ React15.createElement(
        Flex,
        {
          key: "hls-viewer",
          id: `hls-viewer-${themeType}`,
          ref: hlsViewRef,
          direction: isMobile || isLandscape ? "column" : "row",
          justify: "center",
          css: {
            flex: isLandscape ? "2 1 0" : "1 1 0"
          }
        },
        streamEnded ? /* @__PURE__ */ React15.createElement(
          WaitingView,
          {
            icon: /* @__PURE__ */ React15.createElement(ColoredHandIcon, { height: 56, width: 56 }),
            title: "Stream has ended",
            subtitle: "Have a nice day!"
          }
        ) : /* @__PURE__ */ React15.createElement(
          WaitingView,
          {
            icon: /* @__PURE__ */ React15.createElement(GoLiveIcon, { height: 56, width: 56, style: { color: "white" } }),
            title: "Stream yet to start",
            subtitle: "Sit back and relax"
          }
        )
      ));
    }
    return /* @__PURE__ */ React15.createElement(
      Flex,
      {
        key: "hls-viewer",
        id: `hls-viewer-${themeType}`,
        ref: hlsViewRef,
        direction: isMobile || isLandscape ? "column" : "row",
        justify: "center",
        css: {
          flex: isLandscape ? "2 1 0" : "1 1 0",
          transition: "all 0.3s ease-in-out",
          "&:fullscreen": {
            "& video": {
              height: "unset !important"
            }
          }
        }
      },
      hlsViewRef.current && (isMobile || isLandscape) && /* @__PURE__ */ React15.createElement(Box, { css: { position: "fixed", left: "$4", top: "$4", zIndex: 11 } }, /* @__PURE__ */ React15.createElement(LeaveRoom, { screenType: "hls_live_streaming", container: hlsViewRef.current })),
      /* @__PURE__ */ React15.createElement(HMSPlayerContext.Provider, { value: { hlsPlayer } }, (hlsStatsState == null ? void 0 : hlsStatsState.url) && enablHlsStats && !(isMobile || isLandscape) ? /* @__PURE__ */ React15.createElement(HlsStatsOverlay, { hlsStatsState, onClose: sfnOverlayClose }) : null, /* @__PURE__ */ React15.createElement(
        Flex,
        {
          id: "hls-player-container",
          align: "center",
          justify: "center",
          css: {
            size: "100%",
            margin: "0 auto",
            "@md": {
              height: "auto"
            },
            outline: "none"
          },
          onKeyDown: (event) => __async(void 0, null, function* () {
            var _a2;
            if (((_a2 = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _a2.playlist_type) === HLSPlaylistType.DVR) {
              yield keyHandler(event);
            }
          }),
          tabIndex: "0"
        },
        !(isMobile || isLandscape) && /* @__PURE__ */ React15.createElement(HLSAutoplayBlockedPrompt, { open: isHlsAutoplayBlocked, unblockAutoPlay }),
        showLoader && /* @__PURE__ */ React15.createElement(
          Flex,
          {
            align: "center",
            justify: "center",
            css: {
              position: "absolute"
            }
          },
          /* @__PURE__ */ React15.createElement(Loading, { width: 72, height: 72 })
        ),
        /* @__PURE__ */ React15.createElement(
          HMSVideoPlayer.Root,
          {
            ref: videoRef,
            onMouseEnter: onHoverHandler,
            onMouseMove: onHoverHandler,
            onMouseLeave: onHoverHandler,
            onClick: onClickHandler,
            onDoubleClick: (e) => {
              onDoubleClickHandler(e);
            }
          },
          /* @__PURE__ */ React15.createElement(React15.Fragment, null, !(isMobile || isLandscape) && /* @__PURE__ */ React15.createElement(
            Flex,
            {
              align: "center",
              justify: "between",
              css: {
                position: "absolute",
                bg: `${hoverControlsVisible.pausePlay || hoverControlsVisible.seekBackward || hoverControlsVisible.seekForward ? "#00000066" : ""}`,
                display: "inline-flex",
                gap: "$2",
                zIndex: 1,
                size: "100%"
              }
            },
            !showLoader && ((_b = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _b.playlist_type) === HLSPlaylistType.DVR && /* @__PURE__ */ React15.createElement(
              HMSVideoPlayer.PlayPauseSeekControls.Overlay,
              {
                isPaused,
                showControls: controlsVisible,
                hoverControlsVisible
              }
            )
          ), isMobile || isLandscape ? /* @__PURE__ */ React15.createElement(React15.Fragment, null, !showLoader && ((_c = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _c.playlist_type) === HLSPlaylistType.DVR && /* @__PURE__ */ React15.createElement(
            HMSVideoPlayer.PlayPauseSeekControls.Overlay,
            {
              isPaused,
              showControls: controlsVisible,
              hoverControlsVisible
            }
          ), /* @__PURE__ */ React15.createElement(
            Flex,
            {
              ref: controlsRef,
              direction: "column",
              justify: "start",
              align: "start",
              css: {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                flexShrink: 0,
                zIndex: 1,
                visibility: controlsVisible ? `` : `hidden`,
                opacity: controlsVisible ? `1` : "0"
              }
            },
            /* @__PURE__ */ React15.createElement(
              HMSVideoPlayer.Controls.Root,
              {
                css: {
                  p: "$4 $8"
                },
                onClick: (e) => e.stopPropagation()
              },
              /* @__PURE__ */ React15.createElement(HMSVideoPlayer.Controls.Right, null, (isLandscape || isMobile && isFullScreen) && showChat && /* @__PURE__ */ React15.createElement(
                ChatToggle,
                {
                  onClick: () => {
                    if (isFullScreen) {
                      toggle();
                    }
                    setTimeout(() => {
                      toggleChat();
                    }, 0);
                  }
                }
              ), hasCaptions && !isHlsAutoplayBlocked && /* @__PURE__ */ React15.createElement(HLSCaptionSelector, { isEnabled: isCaptionEnabled }), hlsViewRef.current && availableLayers.length > 0 && !isHlsAutoplayBlocked ? /* @__PURE__ */ React15.createElement(
                HLSQualitySelector,
                {
                  layers: availableLayers,
                  onOpenChange: setQualityDropDownOpen,
                  open: qualityDropDownOpen,
                  selection: currentSelectedQuality,
                  onQualityChange: handleQuality,
                  isAuto: isUserSelectedAuto,
                  containerRef: hlsViewRef.current
                }
              ) : null, /* @__PURE__ */ React15.createElement(HLSAutoplayBlockedPrompt, { open: isHlsAutoplayBlocked, unblockAutoPlay }))
            )
          )) : null, controlsVisible && /* @__PURE__ */ React15.createElement(
            Flex,
            {
              ref: controlsRef,
              direction: isMobile ? "columnReverse" : "column",
              justify: "end",
              align: "start",
              css: {
                position: "absolute",
                bottom: isFullScreen && ((_d = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _d.playlist_type) === HLSPlaylistType.DVR ? "$8" : "0",
                left: "0",
                zIndex: 1,
                background: isMobile || isLandscape ? "" : `linear-gradient(180deg, ${theme.colors.background_dim.value}00 29.46%, ${theme.colors.background_dim.value}A3 100%);`,
                width: "100%",
                pt: "$8",
                flexShrink: 0,
                transition: "visibility 0s 0.5s, opacity 0.5s linear"
              }
            },
            ((_e = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _e.playlist_type) === HLSPlaylistType.DVR ? /* @__PURE__ */ React15.createElement(HMSVideoPlayer.Progress, { seekProgress, setSeekProgress }) : null,
            /* @__PURE__ */ React15.createElement(
              HMSVideoPlayer.Controls.Root,
              {
                css: {
                  p: "$4 $8"
                },
                onClick: (e) => e.stopPropagation()
              },
              /* @__PURE__ */ React15.createElement(HMSVideoPlayer.Controls.Left, null, !(isMobile || isLandscape) && /* @__PURE__ */ React15.createElement(React15.Fragment, null, ((_f = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _f.playlist_type) === HLSPlaylistType.DVR ? /* @__PURE__ */ React15.createElement(React15.Fragment, null, /* @__PURE__ */ React15.createElement(HMSVideoPlayer.PlayPauseSeekControls.Button, { isPaused, onSeekTo }), !isVideoLive ? /* @__PURE__ */ React15.createElement(HMSVideoPlayer.Duration, null) : null) : null, /* @__PURE__ */ React15.createElement(HMSVideoPlayer.Volume, null)), /* @__PURE__ */ React15.createElement(
                IconButton,
                {
                  css: { px: "$2" },
                  onClick: (e) => __async(void 0, null, function* () {
                    e.stopPropagation();
                    yield hlsPlayer == null ? void 0 : hlsPlayer.seekToLivePosition();
                    setIsVideoLive(true);
                  }),
                  key: "jump-to-live_btn",
                  "data-testid": "jump-to-live_btn"
                },
                /* @__PURE__ */ React15.createElement(Tooltip, { title: isVideoLive ? "Live" : "Go to Live", side: "top" }, /* @__PURE__ */ React15.createElement(Flex, { justify: "center", gap: 2, align: "center" }, /* @__PURE__ */ React15.createElement(
                  Box,
                  {
                    css: {
                      height: "$4",
                      width: "$4",
                      background: isVideoLive ? "$alert_error_default" : "$on_primary_medium",
                      r: "$1"
                    }
                  }
                ), /* @__PURE__ */ React15.createElement(
                  Text,
                  {
                    variant: "$body1",
                    css: {
                      c: isVideoLive ? "$on_surface_high" : "$on_surface_medium",
                      fontWeight: "$semiBold"
                    }
                  },
                  isVideoLive ? "LIVE" : "GO LIVE"
                )))
              ), (isMobile || isLandscape) && !isVideoLive && ((_g = hlsState == null ? void 0 : hlsState.variants[0]) == null ? void 0 : _g.playlist_type) === HLSPlaylistType.DVR ? /* @__PURE__ */ React15.createElement(HMSVideoPlayer.Duration, null) : null),
              /* @__PURE__ */ React15.createElement(HMSVideoPlayer.Controls.Right, null, hasCaptions && !(isMobile || isLandscape) && /* @__PURE__ */ React15.createElement(HLSCaptionSelector, { isEnabled: isCaptionEnabled }), availableLayers.length > 0 && !(isMobile || isLandscape) ? /* @__PURE__ */ React15.createElement(
                HLSQualitySelector,
                {
                  layers: availableLayers,
                  onOpenChange: setQualityDropDownOpen,
                  open: qualityDropDownOpen,
                  selection: currentSelectedQuality,
                  onQualityChange: handleQuality,
                  isAuto: isUserSelectedAuto
                }
              ) : null, isFullScreenSupported ? /* @__PURE__ */ React15.createElement(FullScreenButton, { isFullScreen, onToggle: toggle }) : null)
            )
          ))
        )
      )),
      /* @__PURE__ */ React15.createElement(ToggleChat, { isFullScreen }),
      isMobile && !isFullScreen && /* @__PURE__ */ React15.createElement(HLSViewTitle, null)
    );
  };
  var HLSView_default = HLSView;
  export {
    HLSView_default as default
  };
  //# sourceMappingURL=HLSView-6DVHGCNF.js.map
  