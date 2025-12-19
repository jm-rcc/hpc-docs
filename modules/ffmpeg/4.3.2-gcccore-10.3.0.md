# FFmpeg 4.3.2  
(vis)  
  
  
A complete, cross-platform solution to record, convert and stream audio and video.  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '10.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load ffmpeg/4.3.2-gcccore-10.3.0`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc3 mi210  
- epyc3  
- epyc4 a16  
- epyc4 l40s  
- epyc4 mi210  
- epyc4  
  
  
## Dependencies  
dependencies = [
    ('binutils', '2.36.1'),
    ('pkg-config', '0.29.2'),
    ('ffnvcodec', '11.1.5.2', '', SYSTEM),  # optional nvenc/dec support
]  
  
