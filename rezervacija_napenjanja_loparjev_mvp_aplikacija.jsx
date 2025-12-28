import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function StringingBookingApp() {
  const [name, setName] = useState("");
  const [string, setString] = useState("Pro Last");
  const [tension, setTension] = useState(24);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleBooking = () => {
    const phone = "041290993"; // tvoja WhatsApp številka
    const message = `Živjo! Rad bi rezerviral napenjanje loparja:%0AIme: ${name}%0AStruna: ${string}%0ANapetost: ${tension} kg%0ADatum: ${date}%0AOpombe: ${notes}`;
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <CardContent className="space-y-4">
          <h1 className="text-xl font-bold text-center">Ratiem napenjanje loparjev</h1>

          <input
            className="w-full p-2 border rounded"
            placeholder="Ime in priimek"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            className="w-full p-2 border rounded"
            value={string}
            onChange={(e) => setString(e.target.value)}
          >
            <option>Pro Last</option>
            <option>Focus-HEX Soft</option>
            <option>Outbreak</option>
            <option>Hyperion</option>
            <option>Tornado</option>
            <option>Hyper-G</option>
            <option>Luxilon Alu Power</option>
          </select>

          <div>
            <label className="text-sm">Napetost (kg): {tension}</label>
            <input
              type="range"
              min="18"
              max="30"
              value={tension}
              onChange={(e) => setTension(e.target.value)}
              className="w-full"
            />
          </div>

          <input
            type="date"
            className="w-full p-2 border rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <textarea
            className="w-full p-2 border rounded"
            placeholder="Opombe (neobvezno)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <Button className="w-full" onClick={handleBooking}>Rezerviraj termin</Button>

          <p className="text-xs text-gray-500 text-center">
            Pošlji rezervacijo na WhatsApp
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
