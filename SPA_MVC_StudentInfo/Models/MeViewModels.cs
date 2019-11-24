using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SPA_MVC_StudentInfo.Models
{
    // Models returned by MeController actions.
    public class GetViewModel
    {
        public string Hometown { get; set; }
    }
}