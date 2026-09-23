# NowWAM project page

Static, dependency-free project page for **Beyond Future Prediction: Denoising
as Generative Adaptation for Robot Control**.

The teaser and method figures are rendered directly from the author-provided
PDF exports in `/workspace/imagewam/asset` (`compare` and `method`) so the
website matches the paper artwork. The project page intentionally omits static
rollout and attention figures: without a video demo, its narrative stays
focused on the paper's central idea and three controlled findings.

Preview locally:

```bash
python3 -m http.server 8080 --directory website
```

Then open `http://localhost:8080`.

For GitHub Pages, copy the contents of this directory to the repository root
of `xmz111/NowWAM` (or configure Pages to publish this directory). The page
uses only relative asset paths.

Before public release:

- replace the `Code soon` element with the public repository URL;
- update the BibTeX with the arXiv identifier;
- optionally replace `assets/NowWAM.pdf` with the arXiv-hosted link.
