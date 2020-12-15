/*
  The MIT License (MIT)

  Copyright (c) 2012 Brendan Nee <brendan@blinktag.com>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
 */

module.exports = {
	filenameBase: 'calendar',
	schema: [
		{
			name: 'service_id',
			type: 'varchar(255)',
			required: true,
			primary: true
		},
		{
			name: 'monday',
			type: 'integer',
			required: true,
			min: 0,
			max: 1
		},
		{
			name: 'tuesday',
			type: 'integer',
			required: true,
			min: 0,
			max: 1
		},
		{
			name: 'wednesday',
			type: 'integer',
			required: true,
			min: 0,
			max: 1
		},
		{
			name: 'thursday',
			type: 'integer',
			required: true,
			min: 0,
			max: 1
		},
		{
			name: 'friday',
			type: 'integer',
			required: true,
			min: 0,
			max: 1
		},
		{
			name: 'saturday',
			type: 'integer',
			required: true,
			min: 0,
			max: 1
		},
		{
			name: 'sunday',
			type: 'integer',
			required: true,
			min: 0,
			max: 1
		},
		{
			name: 'start_date',
			type: 'integer',
			required: true,
			index: true
		},
		{
			name: 'end_date',
			type: 'integer',
			required: true,
			index: true
		}
	]
};
