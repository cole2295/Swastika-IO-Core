﻿using System;
using System.Collections.Generic;

namespace Swastika.Cms.Web.Mvc.Models.Cms
{
    public partial class SiocProductMedia
    {
        public int MediaId { get; set; }
        public string ProductId { get; set; }
        public string Specificulture { get; set; }
        public int Position { get; set; }
        public int Priority { get; set; }
        public int Status { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public SiocMedia SiocMedia { get; set; }
        public SiocProduct SiocProduct { get; set; }
    }
}
