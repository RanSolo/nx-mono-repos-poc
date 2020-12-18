using System.ComponentModel.DataAnnotations;

namespace Models
{
  public class Ailment
  {
    [Key]
    public string Name { get; set; }
    }
}