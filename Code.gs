/*
    INSTRUCTIONS

Click the File menu
Choose Make a copy
The copy will be saved to your Google Drive
You will be the owner of the file saved to your Google Drive

Authorize the Web App
Click the Run icon that is a triangle
Grant permissions

Get the API secrets from your stripe account
Add the client secret (pk_test_12346) to the JS_Stripe_Index file
Add the server side secret sk_test_) to the GS_Stripe file
Test the payment

Publish the Web App

*/

/*
GitHub link to stripe example:
https://github.com/stripe/stripe-payments-demo
*/

/*
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

function doGet() {
  var h;
  
  h = HtmlService.createTemplateFromFile('H_Stripe').evaluate();
  h.setTitle('Stripe V3');
  
  return h;
}
