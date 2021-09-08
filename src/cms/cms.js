import CMS from "netlify-cms-app";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import PeoplePagePreview from "./preview-templates/PeoplePagePreview";
import JoinusPagePreview from "./preview-templates/JoinusPagePreview";
import ProductPostPreview from "./preview-templates/ProductPostPreview";
import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.registerMediaLibrary(uploadcare);
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("people", PeoplePagePreview);
CMS.registerPreviewTemplate("joinus", JoinusPagePreview);
CMS.registerPreviewTemplate("product", ProductPostPreview);
