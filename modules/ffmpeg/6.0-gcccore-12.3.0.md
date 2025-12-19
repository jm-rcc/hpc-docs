# FFmpeg 6.0  
(vis)  
  
  
A complete, cross-platform solution to record, convert and stream audio and video.  
  
  
### Toolchain  
{'name': 'GCCcore', 'version': '12.3.0'}  
  
### Toolchain Options  
None  
  
  
### Usage  
Use the command **`module load ffmpeg/6.0-gcccore-12.3.0`** to load the module on Bunya.  
  
## Available on architecture types  
- epyc3 a100  
- epyc3 h100  
- epyc3 l40  
- epyc3 mi210  
- epyc3  
- epyc4 a16  
- epyc4 l40s  
- epyc4  
- xeonsp4 h100  
- xeonsp4  
  
  
## Dependencies  
dependencies = [
    ('binutils', '2.40'),
    ('pkgconf', '1.9.5'),
    ('ffnvcodec', '12.0.16.0', '', SYSTEM),  # optional nvenc/dec support
]  
  
