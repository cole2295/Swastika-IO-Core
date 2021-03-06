﻿using System;
using System.Collections.Generic;

namespace Swastika.Cms.Web.Mvc.Models.Cms
{
    public partial class SiocModuleProduct
    {
        public string ProductId { get; set; }
        public int ModuleId { get; set; }
        public string Specificulture { get; set; }
        public int Priority { get; set; }
        public int Status { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public SiocModule SiocModule { get; set; }
        public SiocProduct SiocProduct { get; set; }
    }
}
