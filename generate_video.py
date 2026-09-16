import os
import numpy as np
from moviepy import (
    ImageClip, TextClip, CompositeVideoClip, concatenate_videoclips, AudioArrayClip
)

# Scene texts
texts = [
    "Como acham que a gente trabalha",
    "Como realmente é",
    "Copiando e colando código"
]

# Create simple audio using numpy arrays
def create_beep(duration, freq=800, sample_rate=44100):
    t = np.linspace(0, duration, int(sample_rate * duration), False)
    # Fast beeps for Scene 1 (Hacker)
    wave = 0.5 * np.sin(2 * np.pi * freq * t) * (np.sin(2 * np.pi * 10 * t) > 0)
    # Return as 2D array for stereo (required by AudioArrayClip in some cases)
    audio = np.vstack((wave, wave)).T
    return AudioArrayClip(audio, fps=sample_rate)

def create_silence(duration, sample_rate=44100):
    audio = np.zeros((int(sample_rate * duration), 2))
    return AudioArrayClip(audio, fps=sample_rate)

def create_clicks(duration, sample_rate=44100):
    t = np.linspace(0, duration, int(sample_rate * duration), False)
    # Simulate random clicks
    clicks = np.random.normal(0, 0.1, len(t))
    clicks = clicks * (np.sin(2 * np.pi * 5 * t) > 0.8) # Burst of noise
    audio = np.vstack((clicks, clicks)).T
    return AudioArrayClip(audio, fps=sample_rate)

# Define scenes
scene_duration = 3.5
scenes = []

# Map of images to texts
images = ["scene1.jpg", "scene2.jpg", "scene3.jpg"]
audios = [
    create_beep(scene_duration),
    create_silence(scene_duration),
    create_clicks(scene_duration)
]

for i in range(3):
    # Base Image
    img_clip = ImageClip(images[i]).with_duration(scene_duration)

    # Text
    # We use a semi-transparent black background behind the text for readability
    txt_clip = TextClip(
        font="/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
        text=texts[i],
        font_size=45,
        color='white',
        stroke_color='black',
        stroke_width=2,
        method='caption',
        size=(650, None) # Allow word wrapping within 650px width
    ).with_position(('center', 100)).with_duration(scene_duration)

    # Composite
    comp = CompositeVideoClip([img_clip, txt_clip]).with_duration(scene_duration)

    # Add Audio
    comp = comp.with_audio(audios[i])

    scenes.append(comp)

# Concatenate all scenes
final_video = concatenate_videoclips(scenes)

# Render
final_video.write_videofile("developer_meme.mp4", fps=24, codec="libx264", audio_codec="aac")
