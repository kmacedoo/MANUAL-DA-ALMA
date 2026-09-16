from moviepy import ColorClip
video = ColorClip(size=(720, 1280), color=(0, 0, 0), duration=2)
video.write_videofile("test.mp4", fps=24)
