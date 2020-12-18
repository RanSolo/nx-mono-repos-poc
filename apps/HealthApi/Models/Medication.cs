using System.ComponentModel.DataAnnotations;

namespace Models
{
  public class Medication
  {
    [Key]
    public string Name { get; set; }
    public string Doses { get; set; }
    }
}